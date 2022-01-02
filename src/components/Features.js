import { useState } from 'react'
import SectionIntro from './SectionIntro'
import {
	FeaturesContainer,
	TabHeaders,
	TabButton,
} from './style/Features.style'
import { Button } from './style/Button.style'
import {
	HeroCta,
	HeroImage,
	HeroLeft,
	HeroRight,
	StyledHero,
} from './style/Hero.style'
import { SectionHeader } from './style/SectionHeader'

const Features = ({ theme }) => {
	const [toggle, setToggle] = useState(0)

	const feature = true

	const handleToggle = (index) => {
		setToggle(index)
	}

	window.addEventListener('DOMContentLoaded', () => {
		const tabs = document.querySelectorAll('[role="tab"]')
		const tabList = document.querySelector('[role="tablist"]')

		// Add a click event handler to each tab
		tabs.forEach((tab) => {
			tab.addEventListener('click', changeTabs)
		})

		// Enable arrow navigation between tabs in the tab list
		let tabFocus = 0

		tabList.addEventListener('keydown', (e) => {
			// Move right
			if (e.keyCode === 39 || e.keyCode === 37) {
				tabs[tabFocus].setAttribute('tabindex', -1)
				if (e.keyCode === 39) {
					tabFocus++
					// If we're at the end, go to the start
					if (tabFocus >= tabs.length) {
						tabFocus = 0
					}
					// Move left
				} else if (e.keyCode === 37) {
					tabFocus--
					// If we're at the start, move to the end
					if (tabFocus < 0) {
						tabFocus = tabs.length - 1
					}
				}

				tabs[tabFocus].setAttribute('tabindex', 0)
				tabs[tabFocus].focus()
			}
		})
	})

	function changeTabs(e) {
		const target = e.target
		const parent = target.parentNode
		const grandparent = parent.parentNode

		// Remove all current selected tabs
		parent
			.querySelectorAll('[aria-selected="true"]')
			.forEach((t) => t.setAttribute('aria-selected', false))

		// Set this tab as selected
		target.setAttribute('aria-selected', true)

		// Hide all tab panels
		grandparent
			.querySelectorAll('[role="tabpanel"]')
			.forEach((p) => p.setAttribute('hidden', true))

		// Show the selected panel
		grandparent.parentNode
			.querySelector(`#${target.getAttribute('aria-controls')}`)
			.removeAttribute('hidden')
	}
	return (
		<FeaturesContainer>
			<SectionIntro
				header={theme.featureData.title}
				text={theme.featureData.subtitle}
			/>

			<TabHeaders role='tablist' aria-label='Feature Tabs'>
				{theme.featureData.headers.map((header, index) => (
					<TabButton
						key={index}
						onClick={() => handleToggle(index)}
						clicked={toggle}
						index={index}
						role='tab'
						aria-selected={header.ariaSelect}
						aria-controls={header.ariaControls}
						id={index}
						tabIndex={header.tabIndex}>
						{' '}
						{header.text}{' '}
					</TabButton>
				))}
			</TabHeaders>

			{theme.featureData.content.map((content, index) => (
				<StyledHero
					key={index}
					feature={feature}
					clicked={toggle}
					index={index}
					id={content.id}
					role='tabpanel'
					tabIndex='0'
					aria-labelledby={index}>
					<HeroRight>
						<HeroImage src={content.image} alt={content.imageAlt} />
					</HeroRight>

					<HeroLeft>
						<SectionHeader>{content.title}</SectionHeader>
						<p> {content.description} </p>

						<HeroCta>
							<Button bgcolor={theme.colors.pryBlue} color={theme.colors.white}>
								{' '}
								{content.btnText}{' '}
							</Button>
						</HeroCta>
					</HeroLeft>
				</StyledHero>
			))}
		</FeaturesContainer>
	)
}

export default Features
