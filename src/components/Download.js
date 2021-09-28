import React from 'react'
import Cards from './Cards'
import SectionIntro from './SectionIntro'
import { DownloadSection } from './style/Download.style'


const Download = ({theme}) => {
    return (
        <DownloadSection>
            
            <SectionIntro header={theme.downloadData.title} text = {theme.downloadData.subtitle} />

            <Cards data = {theme.downloadData.cardData} />
            
        </DownloadSection>
    )
}

export default Download
