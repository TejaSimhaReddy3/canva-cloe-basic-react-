import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TabItem from '../TabItem'
import ElementItem from '../ElementItem'
import GalleryList from '../GalleryList'
import LowerCarousel from '../LowerCarousel'
import './index.css'

const tabListItem = [
  {tabId: 'FYOU', displayText: 'For You', className: 'fas fa-hand-sparkles'},
  {
    tabId: 'PRESENTATIONS',
    displayText: 'Presentations',
    className: 'fas fa-chart-pie',
  },
  {tabId: 'SMEDIA', displayText: 'Social Media', className: 'fab fa-gratipay'},
  {tabId: 'VIDEO', displayText: 'Video', className: 'fas fa-video'},
  {
    tabId: 'PPRODUCTS',
    displayText: 'Print Products',
    className: 'fas fa-print',
  },
  {tabId: 'MARKETING', displayText: 'Marketing', className: 'fas fa-bullhorn'},
  {tabId: 'OFFICE', displayText: 'Office', className: 'fas fa-briefcase'},
  {tabId: 'MORE', displayText: 'More', className: 'fas fa-ellipsis-h'},
]

const optionsType = [
  {
    optionId: 'DESIGN',
    displayText: 'Design',
  },
  {
    optionId: 'INSTAGRAM',
    displayText: 'Instagram',
  },
  {
    optionId: 'FACEBOOK',
    displayText: 'FaceBook',
  },
  {
    optionId: 'LINKEDIN',
    displayText: 'LinkedIn',
  },
  {
    optionId: 'YOUTUBE',
    displayText: 'YouTube',
  },
  {
    optionId: 'VIDEOEDITOR',
    displayText: 'Video Editor',
  },
  {
    optionId: 'TWITTER',
    displayText: 'Twitter',
  },
]

const featuresType = [
  {
    optionIds: 'Features',
    displayText: 'Features',
  },
  {
    optionIds: 'DESIGN',
    displayText: 'Design Type',
  },
  {
    optionIds: 'PRINTS',
    displayText: 'Prints',
  },
  {
    optionIds: 'TEAMS',
    displayText: 'Teams',
  },
  {
    optionIds: 'APPS',
    displayText: 'Apps',
  },
  {
    optionIds: 'GRAPHS',
    displayText: 'Graphs & Charts',
  },
  {
    optionIds: 'PHOTO',
    displayText: 'Photo Editor',
  },
]

const learnTypes = [
  {
    learnId: 'LEARN',
    displayText: 'Learn',
  },
  {
    learnId: 'COURSES',
    displayText: 'Courses',
  },
  {
    learnId: 'CANVA',
    displayText: 'Canva 101',
  },
  {
    learnId: 'PERSONAL',
    displayText: 'Personal branding',
  },
  {
    learnId: 'SOCIAL',
    displayText: 'Social Media mastery',
  },
  {
    learnId: 'GRAPHIC',
    displayText: 'Graphic design Basics',
  },
  {
    learnId: 'BRANDING',
    displayText: 'Branding your Designs',
  },
  {
    learnId: 'PRESENTATION',
    displayText: 'Presentation to Impress',
  },
]

const elementsList = [
  {
    elementTabId: uuidv4(),
    category: 'FYOU',
    elementText: 'Play with Canva',
    lengthText: '',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591183/1_ukiejd.webp',
    webLink:
      'https://www.canva.com/design/play?type=TADyKgZrACU&category=tACFal755_E&locale=en&analyticsCorrelationId=a55fa69d-a104-4099-909d-9f6db25e4b99',
  },
  {
    elementTabId: uuidv4(),
    category: 'FYOU',
    elementText: 'Presentation (16:9)',
    lengthText: '1920*1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591184/15_zcgfse.webp',
    webLink:
      'https://www.canva.com/design/play?type=TACixRR28vY&category=tACZCvCpAUg&locale=en&analyticsCorrelationId=ccacbe77-7051-46b9-b87e-0f36823d251c',
  },
  {
    elementTabId: uuidv4(),
    category: 'FYOU',
    elementText: 'Video',
    lengthText: '1920*1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591185/18_zznbwz.webp',
    webLink:
      'https://www.canva.com/design/play?type=TADUvCyAV_U&category=tADs1de8MlY&locale=en&analyticsCorrelationId=abb561f6-ee4f-45cf-bf51-2dbb3adf0f3f',
  },
  {
    elementTabId: uuidv4(),
    category: 'FYOU',
    elementText: 'Instagram Post',
    lengthText: '1080*1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591184/14_rump6h.webp',
    webLink:
      'https://www.canva.com/design/play?type=TABQqs5Kbyc&category=tACFajEYUAM&locale=en&analyticsCorrelationId=149ee481-ae93-438e-a937-676ab4b4049d',
  },
  {
    elementTabId: uuidv4(),
    category: 'FYOU',
    elementText: 'Poster',
    lengthText: '42*59.4 cm',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591185/13_wfzrvc.webp',
    webLink:
      'https://www.canva.com/design/play?type=TACQ-jGq9fY&category=tACFat6uXco&locale=en&analyticsCorrelationId=d57fb562-a975-4475-9c7f-fba221bccf68',
  },
  {
    elementTabId: uuidv4(),
    category: 'FYOU',
    elementText: 'Logo',
    lengthText: '500*500 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591183/4_lsiqfu.webp',
    webLink:
      'https://www.canva.com/design/play?type=TAB7AVEOUWQ&category=tACZCvjI6mE&locale=en&analyticsCorrelationId=a091ad3e-f75b-4b5b-818d-871e057bc3c8',
  },
  {
    elementTabId: uuidv4(),
    category: 'FYOU',
    elementText: 'Facebook Post',
    lengthText: '940*788 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591186/23_m6w24q.webp',
    webLink:
      'https://www.canva.com/design/play?type=TACQ-rUo-uE&category=tACFavw5Wlg&locale=en&analyticsCorrelationId=d2523a63-63cb-42c1-846f-a144cc13ffca',
  },
  {
    elementTabId: uuidv4(),
    category: 'FYOU',
    elementText: 'Flyer',
    lengthText: '210*297 mm',
  },
  {
    elementTabId: uuidv4(),
    category: 'FYOU',
    elementText: 'Infographic',
    lengthText: '800*2000 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591186/24_uzsrxr.webp',
    webLink:
      'https://www.canva.com/design/play?type=TABQqtO7tYQ&category=tACFahzNhT4&locale=en&analyticsCorrelationId=b6dc7cc3-fb34-47e9-8bf7-1d69967baff2',
  },
  {
    elementTabId: uuidv4(),
    category: 'FYOU',
    elementText: 'Instagram Story',
    lengthText: '1080*1920 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591188/37_d0u9dl.webp',
    webLink:
      'https://www.canva.com/design/play?type=TACUOfRHN_8&category=tACZCtLTC_A&locale=en&analyticsCorrelationId=93b78e36-0539-4755-abb1-6a1f660b3615',
  },
  {
    elementTabId: uuidv4(),
    category: 'FYOU',
    elementText: 'Resume',
    lengthText: '21*29.7 cm',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591186/22_u2js7k.webp',
    webLink:
      'https://www.canva.com/design/play?type=TACQ-j4WGew&category=tACZCki4tbY&locale=en&analyticsCorrelationId=94fd8496-676a-4a4b-ae95-338b7eeae7ed',
  },
  {
    elementTabId: uuidv4(),
    category: 'FYOU',
    elementText: 'Your Story',
    lengthText: '1080*1920 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591183/2_hpeqe4.webp',
    webLink:
      'https://www.canva.com/design/play?type=TACUOfRHN_8&category=tACZCuMaFhc&locale=en&analyticsCorrelationId=aa227e1d-cc4f-4753-b673-33d3aad25e3a',
  },
  {
    elementTabId: uuidv4(),
    category: 'FYOU',
    elementText: 'A4 Document',
    lengthText: '21 * 29.7 cm',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591183/3_wffjvx.webp',
    webLink:
      'https://www.canva.com/design/play?type=TACQ-j4WGew&category=tACZCgsdcSU&locale=en&analyticsCorrelationId=dfdf04c1-2878-4891-9624-38d650bffbc8',
  },
  {
    elementTabId: uuidv4(),
    category: 'PRESENTATIONS',
    elementText: 'Presentation (16:9)',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591190/53_axbc5d.webp',
    webLink:
      'https://www.canva.com/design/play?type=TACQ-gtv2Yk&category=tACFasDnyEQ&locale=en&analyticsCorrelationId=3560f8d1-3966-4199-bcd7-b551d745d974',
  },
  {
    elementTabId: uuidv4(),
    category: 'PRESENTATIONS',
    elementText: 'Talking Presentation',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591186/26_mqijpv.webp',
    webLink:
      'https://www.canva.com/design/play?type=TAEKt2LhDrU&category=tAEMmhq1f3w&locale=en&analyticsCorrelationId=823c75b6-0b4c-462f-9b44-ce7e09c5b9d4',
  },
  {
    elementTabId: uuidv4(),
    category: 'PRESENTATIONS',
    elementText: 'Mobile-First Presentation',
    lengthText: '1080 * 1920 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591187/27_uxnzyi.webp',
    webLink:
      'https://www.canva.com/design/play?type=TADkTVKuO_Y&category=tADnG1UD1Jg&locale=en&analyticsCorrelationId=312d55b6-8ee5-4cef-bc7d-bec5e446aef6',
  },
  {
    elementTabId: uuidv4(),
    category: 'PRESENTATIONS',
    elementText: 'Presentation (4:3)',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591187/29_k9yo9x.webp',
    webLink:
      'https://www.canva.com/design/play?type=TACQ-lCLuV8&category=tACZClvAym8&locale=en&analyticsCorrelationId=f91fbe7c-debc-456a-8823-2c2c0452706c',
  },
  {
    elementTabId: uuidv4(),
    category: 'PRESENTATIONS',
    elementText: 'Brainstorm Presentation',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591185/20_hctvfx.webp',
    webLink:
      'https://www.canva.com/design/play?type=TACQ-gtv2Yk&category=tAEGho_t6U4&locale=en&analyticsCorrelationId=4cc97682-ff87-4d3b-9f28-a69e95214b4e',
  },
  {
    elementTabId: uuidv4(),
    category: 'PRESENTATIONS',
    elementText: 'Game Presentation',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591185/16_cpfhke.webp',
    webLink:
      'https://www.canva.com/design/play?type=TACQ-gtv2Yk&category=tAEk_3bh5jc&locale=en&analyticsCorrelationId=cc0173c6-677a-4cd6-b230-d5cfe9e7ff8d',
  },
  {
    elementTabId: uuidv4(),
    category: 'SMEDIA',
    elementText: 'Instagram Post',
    lengthText: '1080 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591185/18_zznbwz.webp',
    webLink:
      'https://www.canva.com/design/play?type=TABQqs5Kbyc&category=tACFajEYUAM&locale=en&analyticsCorrelationId=24c1969c-16f8-4688-b28e-bdada252456c',
  },
  {
    elementTabId: uuidv4(),
    category: 'SMEDIA',
    elementText: 'Facebook Post',
    lengthText: '940 * 788 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591185/17_lvs5i9.webp',
    webLink:
      'https://www.canva.com/design/play?type=TACQ-rUo-uE&category=tACFavw5Wlg&locale=en&analyticsCorrelationId=bb29b1c1-009b-4ac5-acff-004a1c024316',
  },
  {
    elementTabId: uuidv4(),
    category: 'SMEDIA',
    elementText: 'Instagram Story',
    lengthText: '1080 * 1920 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591185/19_dmhhej.webp',
    webLink:
      'https://www.canva.com/design/play?type=TACUOfRHN_8&category=tACZCtLTC_A&locale=en&analyticsCorrelationId=5db00d7e-df62-4516-91b4-1f7bf9bd99ea',
  },
  {
    elementTabId: uuidv4(),
    category: 'SMEDIA',
    elementText: 'Your Story',
    lengthText: '1080 * 1920 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591187/32_xoax98.webp',
    webLink:
      'https://www.canva.com/design/play?type=TACUOfRHN_8&category=tACZCuMaFhc&locale=en&analyticsCorrelationId=b1805213-5f51-40d5-bf77-9b0c89eec559',
  },
  {
    elementTabId: uuidv4(),
    category: 'SMEDIA',
    elementText: 'WhatsApp Status',
    lengthText: '1080 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591189/40_ps9cql.webp',
    webLink:
      'https://www.canva.com/design/play?type=TACUOfRHN_8&category=tAED_ZIw9PI&locale=en&analyticsCorrelationId=1e073a58-1b44-4cde-91dc-7a090cc9136f',
  },
  {
    elementTabId: uuidv4(),
    category: 'SMEDIA',
    elementText: 'Facebook Cover',
    lengthText: '1640 * 924 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591189/42_ot6gzs.webp',
    webLink:
      'https://www.canva.com/design/play?type=TAEB2BZnMpk&category=tACFauRB4fU&locale=en&analyticsCorrelationId=b36f84c2-0107-46bc-b071-64b6cd1ac7ea',
  },
  {
    elementTabId: uuidv4(),
    category: 'SMEDIA',
    elementText: 'Instagram Reels Video',
    lengthText: '1080 * 1920 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591189/44_qsje2y.webp',
    webLink:
      'https://www.canva.com/design/play?type=TAD9VKDO5tI&category=tAEEZ59QX_I&locale=en&analyticsCorrelationId=d63ffe6f-25b0-4de6-b1ed-88c30f6d43c2',
  },
  {
    elementTabId: uuidv4(),
    category: 'SMEDIA',
    elementText: 'TikTok Video',
    lengthText: '1080 * 1920 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591189/47_wu36pv.webp',
    webLink:
      'https://www.canva.com/design/play?type=TAD9VKDO5tI&category=tAEJ44I-P4M&locale=en&analyticsCorrelationId=c061a9f7-29e7-494b-aa93-77aec4d755cf',
  },
  {
    elementTabId: uuidv4(),
    category: 'SMEDIA',
    elementText: 'YouTube Thumbnail',
    lengthText: '1280 * 720 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591190/49_unus9a.webp',
    webLink:
      'https://www.canva.com/design/play?type=TACQ-mQ0NXU&category=tACZCnmCPGY&locale=en&analyticsCorrelationId=31f2ecfb-d15d-4625-a8c0-caf268578c19',
  },
  {
    elementTabId: uuidv4(),
    category: 'SMEDIA',
    elementText: 'YouTube Intro',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591190/41_t3u0gm.webp',
    webLink:
      'https://www.canva.com/design/play?type=TADUvCyAV_U&category=tADs1VCP524&locale=en&analyticsCorrelationId=8783939d-0084-4e7e-a2a0-7f226f37847d',
  },
  {
    elementTabId: uuidv4(),
    category: 'SMEDIA',
    elementText: 'Animated Social Media',
    lengthText: '1080 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591189/47_wu36pv.webp',
    webLink:
      'https://www.canva.com/design/play?type=TAEB2h7V5Cw&category=tADbfqfbIxE&locale=en&analyticsCorrelationId=dfab70b2-5d41-4f66-8f64-04a9924198b1',
  },
  {
    elementTabId: uuidv4(),
    category: 'SMEDIA',
    elementText: 'Social Media',
    lengthText: '1080 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591190/49_unus9a.webp',
    webLink:
      'https://www.canva.com/design/play?type=TADyKgZrACU&category=tACFal755_E&locale=en&analyticsCorrelationId=06354839-8c3b-495d-89dd-d91db36644c5',
  },
  {
    elementTabId: uuidv4(),
    category: 'SMEDIA',
    elementText: 'YouTube Channel Art',
    lengthText: '2650 * 1440 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591190/41_t3u0gm.webp',
    webLink:
      'https://www.canva.com/design/play?type=TACQ-j0GgH4&category=tACZChShqI0&locale=en&analyticsCorrelationId=a47dc7e3-efb4-40e0-a918-56cbc13b9cc1',
  },
  {
    elementTabId: uuidv4(),
    category: 'SMEDIA',
    elementText: 'Twitter Post',
    lengthText: '1600 * 900 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591191/50_wrkhqu.webp',
    webLink:
      'https://www.canva.com/design/play?type=TAD-2D3JRN4&category=tACFagP1mXg&locale=en&analyticsCorrelationId=b51b6844-8e5b-4014-8945-7fe5ca8d5cfc',
  },
  {
    elementTabId: uuidv4(),
    category: 'SMEDIA',
    elementText: 'Pinterest Pin(1000 * 1500)',
    lengthText: '1000 * 1500 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591191/51_ny50ly.webp',
    webLink:
      'https://www.canva.com/design/play?type=TADw_E8FUxQ&category=tACFakezTYY&locale=en&analyticsCorrelationId=41c70818-19db-43f2-9667-ee016709b103',
  },
  {
    elementTabId: uuidv4(),
    category: 'SMEDIA',
    elementText: 'Facebook Ad',
    lengthText: '1200 * 628 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591189/48_zeojur.webp',
    webLink:
      'https://www.canva.com/design/play?type=TABQquIHMEM&category=tACZCoDePIo&locale=en&analyticsCorrelationId=e6514ad1-5e7e-476e-a409-a03a10b55fd8',
  },
  {
    elementTabId: uuidv4(),
    category: 'SMEDIA',
    elementText: 'LinkedIn Banner',
    lengthText: '1584 * 396 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591192/62_svjhzy.webp',
    webLink:
      'https://www.canva.com/design/play?type=TAENPj_Jo5k&category=tACZCu4vaxs&locale=en&analyticsCorrelationId=f148aa57-38be-46f1-8abb-2cc62501c6d3',
  },
  {
    elementTabId: uuidv4(),
    category: 'SMEDIA',
    elementText: 'Facebook Event Cover',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591192/58_o9cull.webp',
    webLink:
      'https://www.canva.com/design/play?type=TACjmUiS5UI&category=tACZCsvcXEk&locale=en&analyticsCorrelationId=105f0c5d-51a4-4946-887f-4f5418c4ea1a',
  },
  {
    elementTabId: uuidv4(),
    category: 'SMEDIA',
    elementText: 'Instagram Story Highlight',
    lengthText: '1080 * 1920 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591193/64_objaoa.jpg',
    webLink:
      'https://www.canva.com/design/play?type=TACUOfRHN_8&category=tADbMYeSJoM&locale=en&analyticsCorrelationId=6b571688-f65b-4eab-b787-1d238b4de3bd',
  },
  {
    elementTabId: uuidv4(),
    category: 'SMEDIA',
    elementText: 'Instagram Ad',
    lengthText: '1080 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591193/67_pntmcy.webp',
    webLink:
      'https://www.canva.com/design/play?type=TABQqs5Kbyc&category=tADer2V5Ac4&locale=en&analyticsCorrelationId=dc4d09de-1253-4672-b8a1-4e64d796f83c',
  },
  {
    elementTabId: uuidv4(),
    category: 'VIDEO',
    elementText: 'Video',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591193/64_ofdfjq.webp',
    webLink:
      'https://www.canva.com/design/play?type=TADUvCyAV_U&category=tADs1de8MlY&locale=en&analyticsCorrelationId=e541c499-fada-44ad-b6be-27c88f45241a',
  },
  {
    elementTabId: uuidv4(),
    category: 'VIDEO',
    elementText: 'Facebook Video',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591194/70_smdn4y.webp',
    webLink:
      'https://www.canva.com/design/play?type=TAEMhA1EV4A&category=tADbfgqdKps&locale=en&analyticsCorrelationId=07943342-7daa-4dfe-a5ea-c11d623886ae',
  },
  {
    elementTabId: uuidv4(),
    category: 'VIDEO',
    elementText: 'Video Message',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591194/71_a8eoax.webp',
    webLink:
      'https://www.canva.com/design/play?type=TAEKEab_T_A&category=tAEM-ErEDJM&locale=en&analyticsCorrelationId=651ef880-bff5-422d-8954-54b860f55ab0',
  },
  {
    elementTabId: uuidv4(),
    category: 'VIDEO',
    elementText: 'Mobile Video',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591195/76_a6lwwj.webp',
    webLink:
      'https://www.canva.com/design/play?type=TAD9VKDO5tI&category=tAEEZ_gIPxM&locale=en&analyticsCorrelationId=376218c0-bc7d-49b6-82ea-cc956e47419c',
  },
  {
    elementTabId: uuidv4(),
    category: 'VIDEO',
    elementText: 'YouTube Video',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591195/74_u9x2uw.webp',
    webLink:
      'https://www.canva.com/design/play?type=TADUvCyAV_U&category=tADs1XjkUPA&locale=en&analyticsCorrelationId=3830a0c5-df34-4025-82a2-24de1e0e63dd',
  },
  {
    elementTabId: uuidv4(),
    category: 'VIDEO',
    elementText: 'Video Collage',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591195/72_s9ro3n.webp',
    webLink:
      'https://www.canva.com/design/play?type=TADmiywAggI&category=tADs1eKMKW4&locale=en&analyticsCorrelationId=d57f5504-e2d7-4582-80b1-9b2d82de2c78',
  },
  {
    elementTabId: uuidv4(),
    category: 'VIDEO',
    elementText: 'YouTube Video Ad',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591195/72_s9ro3n.webp',
    webLink:
      'https://www.canva.com/design/play?type=TADUvCyAV_U&category=tAD-BgI9Who&locale=en&analyticsCorrelationId=12313c36-0e8f-4fb2-aec3-6ec9211389cb',
  },
  {
    elementTabId: uuidv4(),
    category: 'VIDEO',
    elementText: 'Feed Ad Video(Portrait)',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591195/73_bsr1rf.webp',
    webLink:
      'https://www.canva.com/design/play?type=TAD2BZngkJI&category=tAD2FkDm3-Q&locale=en&analyticsCorrelationId=c77946fb-ffbc-43a7-a605-16971fb8fe64',
  },
  {
    elementTabId: uuidv4(),
    category: 'VIDEO',
    elementText: 'Instagram Reels Video',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591196/80_tzhvjf.webp',
    webLink:
      'https://www.canva.com/design/play?type=TAD9VKDO5tI&category=tAEEZ59QX_I&locale=en&analyticsCorrelationId=1f028b1f-879d-4032-8e6e-687b5b470d67',
  },
  {
    elementTabId: uuidv4(),
    category: 'VIDEO',
    elementText: 'LinkedIn Video Ad',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591197/85_gf3ibm.webp',
    webLink:
      'https://www.canva.com/design/play?type=TAECHFpFUMA&category=tAECHM_2EvY&locale=en&analyticsCorrelationId=c021639a-0f5e-47d4-8dc4-9ff98ae686aa',
  },
  {
    elementTabId: uuidv4(),
    category: 'VIDEO',
    elementText: 'TikTok Video',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591197/87_ctlmr5.webp',
    webLink:
      'https://www.canva.com/design/play?type=TAD9VKDO5tI&category=tAEJ44I-P4M&locale=en&analyticsCorrelationId=1122ebd5-acef-4553-a219-822000c1f0fb',
  },
  {
    elementTabId: uuidv4(),
    category: 'PPRODUCTS',
    elementText: 'Postcard',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591197/86_il5cww.webp',
    webLink:
      'https://www.canva.com/design/play?type=TACjUzwty98&category=tACZCro8YLc&locale=en&analyticsCorrelationId=6c2a1ee0-ba73-4941-8844-c0d1f26641e2',
  },
  {
    elementTabId: uuidv4(),
    category: 'PPRODUCTS',
    elementText: 'Poster',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591198/91_phlqxc.webp',
    webLink:
      'https://www.canva.com/design/play?type=TACQ-jGq9fY&category=tACFat6uXco&locale=en&analyticsCorrelationId=2325ebc0-453a-4d54-8a1c-add2059db5c1',
  },
  {
    elementTabId: uuidv4(),
    category: 'PPRODUCTS',
    elementText: 'Flyer',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591198/90_grqbw8.webp',
    webLink:
      'https://www.canva.com/design/play?type=TACixUyoqp0&category=tACZCh01txM&locale=en&analyticsCorrelationId=1c1c19fa-433d-437b-b3ce-357549bdfcd8',
  },
  {
    elementTabId: uuidv4(),
    category: 'PPRODUCTS',
    elementText: 'Certificate',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591198/94_khz6gv.webp',
    webLink:
      'https://www.canva.com/design/play?type=TACTmE1fsnQ&category=tACZCk6N0I4&locale=en&analyticsCorrelationId=b9ece68b-0d70-4bd5-894b-ba6d5d7a36a8',
  },
  {
    elementTabId: uuidv4(),
    category: 'PPRODUCTS',
    elementText: 'Card (Landscape)',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591199/98_rdhdp4.webp',
    webLink:
      'https://www.canva.com/design/play?type=TACQ-n7A6Z0&category=tACVL2ns1Zw&locale=en&analyticsCorrelationId=2a2fd36b-483a-4f18-8335-a5833b3df40a',
  },
  {
    elementTabId: uuidv4(),
    category: 'PPRODUCTS',
    elementText: 'Birthday Card',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591199/97_izdizz.webp',
    webLink:
      'https://www.canva.com/design/play?type=TACQ-n7A6Z0&category=tACZCmfAaJA&locale=en&analyticsCorrelationId=1cd85a4c-ad17-4b8e-b1fa-c354f0c40afd',
  },
  {
    elementTabId: uuidv4(),
    category: 'PPRODUCTS',
    elementText: 'Thank You Postcard',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591200/103_ietuob.webp',
    webLink:
      'https://www.canva.com/design/play?type=TACjUzwty98&category=tACZCnkeKCg&locale=en&analyticsCorrelationId=7df876dc-5c3b-477f-bd2d-43dbc132d9cb',
  },
  {
    elementTabId: uuidv4(),
    category: 'PPRODUCTS',
    elementText: 'Save The Date Postcard',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591200/104_sor6zz.webp',
    webLink:
      'https://www.canva.com/design/play?type=TACjUzwty98&category=tACZCghetzk&locale=en&analyticsCorrelationId=a3536f02-941d-4a19-93e2-86b5a4281dce',
  },
  {
    elementTabId: uuidv4(),
    category: 'PPRODUCTS',
    elementText: 'Real Estate Postcard',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591200/105_xzwrf5.webp',
    webLink:
      'https://www.canva.com/design/play?type=TACjUzwty98&category=tACZCpzScSA&locale=en&analyticsCorrelationId=5b721854-1ee1-4aeb-b41c-bd7ededfd3ee',
  },
  {
    elementTabId: uuidv4(),
    category: 'PPRODUCTS',
    elementText: 'Announcement',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591200/107_p7yz3b.webp',
    webLink:
      'https://www.canva.com/design/play?type=TACixRR28vY&category=tACZCoVDB-w&locale=en&analyticsCorrelationId=0b5e67d6-2ddd-46e8-a263-61da80384763',
  },
  {
    elementTabId: uuidv4(),
    category: 'PPRODUCTS',
    elementText: 'Letterhead',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591200/106_rl6nxo.jpg',
    webLink:
      'https://www.canva.com/design/play?type=TACQ-j4WGew&category=tACZCqsdvJ8&locale=en&analyticsCorrelationId=fab82891-6209-498c-b66e-e7d7d64f74a4',
  },
  {
    elementTabId: uuidv4(),
    category: 'PPRODUCTS',
    elementText: 'Resume',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591201/108_wkploj.webp',
    webLink:
      'https://www.canva.com/design/play?type=TACQ-j4WGew&category=tACZCki4tbY&locale=en&analyticsCorrelationId=d5965317-f665-4705-b93e-809bd23aa46b',
  },
  {
    elementTabId: uuidv4(),
    category: 'PPRODUCTS',
    elementText: 'Menu',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591201/110_e9rnkm.webp',
    webLink:
      'https://www.canva.com/design/play?type=TACQ-j4WGew&category=tACZCki4tbY&locale=en&analyticsCorrelationId=d5965317-f665-4705-b93e-809bd23aa46b',
  },
  {
    elementTabId: uuidv4(),
    category: 'PPRODUCTS',
    elementText: 'NewsLetter',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591201/111_vwekkm.jpg',
    webLink:
      'https://www.canva.com/design/play?type=TACQ-j4WGew&category=tACZCgdLZnY&locale=en&analyticsCorrelationId=e3275ebd-3057-4547-b2bd-7712390ff504',
  },
  {
    elementTabId: uuidv4(),
    category: 'PPRODUCTS',
    elementText: 'Letter',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591201/113_hpaoze.webp',
    webLink:
      'https://www.canva.com/design/play?type=TACQ-j4WGew&category=tACZCn1F2Jc&locale=en&analyticsCorrelationId=3e032a6f-adfa-4b0e-9495-9b677013cf3e',
  },
  {
    elementTabId: uuidv4(),
    category: 'MARKETING',
    elementText: 'Logo',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591201/112_sjw3bi.webp',
    webLink:
      'https://www.canva.com/design/play?type=TACQ-jGq9fY&category=tACFat6uXco&locale=en&analyticsCorrelationId=50f60920-1cb6-4dfb-8fab-129da1afdb0e',
  },
  {
    elementTabId: uuidv4(),
    category: 'MARKETING',
    elementText: 'Flyer',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591202/114_x0szuh.webp',
    webLink:
      'https://www.canva.com/design/play?type=TACixUyoqp0&category=tACZCh01txM&locale=en&analyticsCorrelationId=a3ef39b0-5bf8-4edc-a1c4-1bdcf5148342',
  },
  {
    elementTabId: uuidv4(),
    category: 'MARKETING',
    elementText: 'Business Card',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591201/112_sjw3bi.webp',
    webLink:
      'https://www.canva.com/design/play?type=TACQ-vRWTmU&category=tACZCsHw0pA&locale=en&analyticsCorrelationId=502015f6-14dd-4a3e-b178-c108879dc095',
  },
  {
    elementTabId: uuidv4(),
    category: 'MARKETING',
    elementText: 'Notebook',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591198/88_ys0fi4.webp',
    webLink:
      'https://www.canva.com/design/play?type=TAEjeZ3N8ZQ&category=tAEn_ej97v0&locale=en&analyticsCorrelationId=de797e8a-91b0-4e36-9214-e1dc6981ac8d',
  },
  {
    elementTabId: uuidv4(),
    category: 'MARKETING',
    elementText: 'Blog Banner',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591196/81_teogkf.webp',
    webLink:
      'https://www.canva.com/design/play?type=TAD-6blkuRE&category=tACFakiSKJ8&locale=en&analyticsCorrelationId=199dd564-c780-4857-bccc-c26b869898fb',
  },
  {
    elementTabId: uuidv4(),
    category: 'MARKETING',
    elementText: 'Label',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591195/76_a6lwwj.webp',
    webLink:
      'https://www.canva.com/design/play?type=TACGF7bSCHg&category=tACZClZAsNk&locale=en&analyticsCorrelationId=30f53b6e-aaf8-4748-9afb-df8b0c03d5f7',
  },
  {
    elementTabId: uuidv4(),
    category: 'OFFICE',
    elementText: 'Resume',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591194/75_i0wtlr.webp',
    webLink:
      'https://www.canva.com/design/play?type=TACQ-j4WGew&category=tACZCki4tbY&locale=en&analyticsCorrelationId=cbadd28e-92a9-41d8-a22e-8583066900d6',
  },
  {
    elementTabId: uuidv4(),
    category: 'OFFICE',
    elementText: 'A4 Document',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591194/70_smdn4y.webp',
    webLink:
      'https://www.canva.com/design/play?type=TACQ-j4WGew&category=tACZCgsdcSU&locale=en&analyticsCorrelationId=f4a0e34f-b259-4fbd-bd1b-ec329cffe377',
  },
  {
    elementTabId: uuidv4(),
    category: 'OFFICE',
    elementText: 'Report',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591193/68_cndkdr.webp',
    webLink:
      'https://www.canva.com/design/play?type=TACQ-j4WGew&category=tACZCm10WCU&locale=en&analyticsCorrelationId=8bd3bceb-35aa-4a04-a997-7ed4e112ab0c',
  },
  {
    elementTabId: uuidv4(),
    category: 'OFFICE',
    elementText: 'Planner',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591192/60_cbltbz.webp',
    webLink:
      'https://www.canva.com/design/play?type=TACQ-j4WGew&category=tACZCvWVb9E&locale=en&analyticsCorrelationId=2c72a08f-b898-4473-bdd9-e5e3126e734a',
  },
  {
    elementTabId: uuidv4(),
    category: 'OFFICE',
    elementText: 'Letter',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591192/58_o9cull.webp',
    webLink:
      'https://www.canva.com/design/play?type=TACQ-j4WGew&category=tACZCn1F2Jc&locale=en&analyticsCorrelationId=580deece-4988-46e9-b1b3-c037c2b3ea4d',
  },
  {
    elementTabId: uuidv4(),
    category: 'OFFICE',
    elementText: 'Letterhead',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591191/55_yarli2.webp',
    webLink:
      'https://www.canva.com/design/play?type=TACQ-j4WGew&category=tACZCqsdvJ8&locale=en&analyticsCorrelationId=94a934fb-fe58-4b5a-b938-8aa3dac458f2',
  },
  {
    elementTabId: uuidv4(),
    category: 'OFFICE',
    elementText: 'Proposal',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591189/47_wu36pv.webp',
    webLink:
      'https://www.canva.com/design/play?type=TACQ-j4WGew&category=tACZCvGJD-o&locale=en&analyticsCorrelationId=fe28fcf3-5469-42ec-9b94-1fbbf2bc544e',
  },
  {
    elementTabId: uuidv4(),
    category: 'MORE',
    elementText: 'Wall Calendar',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591190/41_t3u0gm.webp',
    webLink:
      'https://www.canva.com/design/play?type=TAEr6FEZCOY&category=tAEKpbcdTwk&locale=en&analyticsCorrelationId=cb65cf7e-0765-405a-a4d3-54d94231dc7c',
  },
  {
    elementTabId: uuidv4(),
    category: 'MORE',
    elementText: 'Infographic',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591189/42_ot6gzs.webp',
    webLink:
      'https://www.canva.com/design/play?type=TABQqtO7tYQ&category=tACFahzNhT4&locale=en&analyticsCorrelationId=9596cc1b-304f-4a57-9562-c2fb203080af',
  },
  {
    elementTabId: uuidv4(),
    category: 'MORE',
    elementText: 'Photo Collage',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591188/43_ie24mj.webp',
    webLink:
      'https://www.canva.com/design/play?type=TACQ-lYNs3U&category=tACFain9R6w&locale=en&analyticsCorrelationId=57e55832-d89a-4617-a67f-4596c06cf76f',
  },
  {
    elementTabId: uuidv4(),
    category: 'MORE',
    elementText: 'Desktop Wallpaper',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591201/111_vwekkm.jpg',
    webLink:
      'https://www.canva.com/design/play?type=TABQqvMf5YM&category=tACZCp5JRWg&locale=en&analyticsCorrelationId=c7c6f655-cfa5-4993-b4aa-480887f98f88',
  },
  {
    elementTabId: uuidv4(),
    category: 'MORE',
    elementText: 'Graph',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591199/98_rdhdp4.webp',
    webLink:
      'https://www.canva.com/design/play?type=TACQ-lCLuV8&category=tADWPe0sPmk&locale=en&analyticsCorrelationId=acb3a324-f32a-4afe-aeef-3fb8a5c77b2b',
  },
  {
    elementTabId: uuidv4(),
    category: 'MORE',
    elementText: 'Book Cover',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591199/99_bcst9s.webp',
    webLink:
      'https://www.canva.com/design/play?type=TABQqvkTd7I&category=tACZChfZug8&locale=en&analyticsCorrelationId=5f0b274e-49c5-45c1-96df-05e035bd985c',
  },
  {
    elementTabId: uuidv4(),
    category: 'MORE',
    elementText: 'Mind Map',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591198/90_grqbw8.webp',
    webLink:
      'https://www.canva.com/design/play?type=TAD8qSS2WZc&category=tACZCpzRB-E&locale=en&analyticsCorrelationId=9a5eae45-b75e-4916-b500-17a2c6888203',
  },
  {
    elementTabId: uuidv4(),
    category: 'MORE',
    elementText: 'Magazine Cover',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591198/89_ruwnrf.webp',
    webLink:
      'https://www.canva.com/design/play?type=TACQ-j4WGew&category=tACZCstahYQ&locale=en&analyticsCorrelationId=4b1f052f-43f6-456a-92b3-5f55cd400a6d',
  },
  {
    elementTabId: uuidv4(),
    category: 'MORE',
    elementText: 'Zoom Virtual Background',
    lengthText: '1920 * 1080 px',
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591198/91_phlqxc.webp',
    webLink:
      'https://www.canva.com/design/play?type=TAD3Cyc36sI&category=tAD29OGY7wA&locale=en&analyticsCorrelationId=0e43b392-ea19-4330-97ff-d43468d7651a',
  },
]

const templateList = [
  {
    templateId: uuidv4(),
    templateUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591200/104_sor6zz.webp',
  },
  {
    templateId: uuidv4(),
    templateUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591183/4_lsiqfu.webp',
  },
  {
    templateId: uuidv4(),
    templateUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591185/16_cpfhke.webp',
  },
  {
    templateId: uuidv4(),
    templateUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591186/28_v7ejkv.webp',
  },
  {
    templateId: uuidv4(),
    templateUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591188/34_upukmw.webp',
  },
  {
    templateId: uuidv4(),
    templateUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591187/32_xoax98.webp',
  },
  {
    templateId: uuidv4(),
    templateUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591190/41_t3u0gm.webp',
  },
  {
    templateId: uuidv4(),
    templateUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591191/54_dl3aoa.webp',
  },
  {
    templateId: uuidv4(),
    templateUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591193/64_objaoa.jpg',
  },
  {
    templateId: uuidv4(),
    templateUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591193/66_ykhs8q.webp',
  },
  {
    templateId: uuidv4(),
    templateUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591195/78_noctl6.webp',
  },
  {
    templateId: uuidv4(),
    templateUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591198/92_kllr8k.webp',
  },
  {
    templateId: uuidv4(),
    templateUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591199/95_e7wig3.webp',
  },
  {
    templateId: uuidv4(),
    templateUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639591200/101_cqkysg.webp',
  },
]

const lowerImagesList = [
  {
    lowerId: uuidv4(),
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639635200/Screenshot_2021-12-16_113856_yriamu.png',
    dislayText:
      'How HubSpot empowered 300 team members to move quickly, create on-brand designs and collaborate better, together',
  },
  {
    lowerId: uuidv4(),
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639635199/Screenshot_2021-12-16_113920_xn08ru.png',
    dislayText:
      'How Skyscanner rolled out a successful rebrand with Canva for Enterprise in 6 months',
  },
  {
    lowerId: uuidv4(),
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639635199/Screenshot_2021-12-16_113943_m9j7ea.png',
    dislayText:
      'Why Canva Pro’s quick “shareability” is its biggest drawcard for HuffPost',
  },
  {
    lowerId: uuidv4(),
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639635200/Screenshot_2021-12-16_114004_njvenp.png',
    dislayText:
      'George Lee’s inspiring classroom collaboration story at Balboa High',
  },
  {
    lowerId: uuidv4(),
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639635202/Screenshot_2021-12-16_114026_rlhsbk.png',
    dislayText:
      'How Amnesty creates campaigns with impact using the power of Canva',
  },
  {
    lowerId: uuidv4(),
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639635202/Screenshot_2021-12-16_114042_xht2xu.png',
    dislayText:
      'How Macquarie Anglican Grammar School set their school year up for success with Canva',
  },
  {
    lowerId: uuidv4(),
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639635211/Screenshot_2021-12-16_114108_p0qyan.png',
    dislayText:
      'Canva’s drag-and-drop interface unleashes unlimited creativity for Concordia University Irvine',
  },
  {
    lowerId: uuidv4(),
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639635206/Screenshot_2021-12-16_114152_hpr4aq.png',
    dislayText:
      'How Realty Austin empowered +500 agents to design their own marketing material',
  },
  {
    lowerId: uuidv4(),
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639635209/Screenshot_2021-12-16_114217_tjh15x.png',
    dislayText:
      'Streamlining the face of Yelp in 160 cities around the world, in moments',
  },
  {
    lowerId: uuidv4(),
    imageUrl:
      'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639635208/Screenshot_2021-12-16_114236_okcecx.png',
    dislayText:
      'How 500 Honeymoon Dessert stores create on-brand marketing material with no design experience needed',
  },
]

class canvaHome extends Component {
  state = {
    optionId: optionsType[0].optionId,
    optionIds: featuresType[0].optionIds,
    learnId: learnTypes[0].learnId,
    searchInput: '',
    activeTabId: tabListItem[0].tabId,
  }

  onChangeOption = event => {
    this.setState({optionId: event.target.value})
  }

  onChangeFeature = event => {
    this.setState({optionIds: event.target.value})
  }

  onChangeLearn = event => {
    this.setState({learnId: event.target.value})
  }

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  setActiveTabId = tabId => {
    this.setState({activeTabId: tabId})
  }

  getSearchOutput = () => {
    const {searchInput} = this.state
    const searchElements = elementsList.filter(eachElement =>
      eachElement.category.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return searchElements
  }

  getActiveTab = searchTab => {
    const {activeTabId} = this.state
    const filteredTabs = searchTab.filter(
      eachFilter => eachFilter.category === activeTabId,
    )

    return filteredTabs
  }

  render() {
    const {optionId, optionIds, learnId, searchInput, activeTabId} = this.state
    const searchResults = this.getSearchOutput()

    const filteredElements = this.getActiveTab(searchResults)

    return (
      <div className="mainContainer">
        <div className="headerContainer">
          <div className="navBarContainer">
            <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
              <div className="mainHeader">
                <a href="https://www.canva.com" className="navContainer">
                  <img
                    src="https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639139533/Canva-logo_jqqd45.png"
                    className="logoImg"
                    alt="navLogo"
                  />
                </a>
                <div className="navSearchContainer">
                  <div className="searchImage">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/app-store/app-store-search-img.png"
                      alt="search icon"
                      className="search-img"
                    />
                  </div>
                  <input
                    type="search"
                    placeholder="Try logo,poster,anything!"
                    className="searchBar"
                    value={searchInput}
                    onChange={this.onChangeSearch}
                  />
                </div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"> </span>
                </button>
                <div
                  className="collapse navbar-collapse spaceBetween"
                  id="navbarNavAltMarkup"
                >
                  <div className="navbar-nav optionsMenu">
                    <a
                      className="nav-link pointerCursor"
                      href="http://www.canva.com"
                    >
                      Home
                    </a>
                    <label htmlFor="design" className="nav-link pointerCursor">
                      {' '}
                    </label>
                    <select
                      id="design"
                      className="nav-link pointerCursor"
                      value={optionId}
                      onChange={this.onChangeOption}
                    >
                      {optionsType.map(eachOption => (
                        <option
                          key={eachOption.optionId}
                          value={eachOption.optionId}
                        >
                          {eachOption.displayText}
                        </option>
                      ))}
                    </select>
                    <a
                      className="nav-link pointerCursor"
                      href="http://www.canva.com/templates"
                    >
                      Templates
                    </a>
                    <label
                      htmlFor="features"
                      className="nav-link pointerCursor"
                    >
                      {' '}
                    </label>
                    <select
                      id="features"
                      className="nav-link pointerCursor"
                      value={optionIds}
                      onChange={this.onChangeFeature}
                    >
                      {featuresType.map(eachOption => (
                        <option
                          key={eachOption.optionIds}
                          value={eachOption.optionIds}
                        >
                          {eachOption.displayText}
                        </option>
                      ))}
                    </select>
                    <label htmlFor="learn" className="nav-link pointerCursor">
                      {' '}
                    </label>
                    <select
                      id="learn"
                      className="nav-link pointerCursor"
                      value={learnId}
                      onChange={this.onChangeLearn}
                    >
                      {learnTypes.map(eachOption => (
                        <option
                          key={eachOption.learnId}
                          value={eachOption.learnId}
                        >
                          {eachOption.displayText}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="lastElements navbar-nav">
                    <div className="helpContainer">
                      <a
                        href="http://www.canva.com/help"
                        className="helpAnchor"
                      >
                        <i className="far fa-question-circle"> </i>
                      </a>
                    </div>
                    <button className="loginButton" type="button">
                      Log in
                    </button>
                    <button className="signupButton" type="button">
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <br />
        <div className="mainComponentContainer">
          <div className="headingAndSize">
            <h1 className="mainHeading">What will you Design ?</h1>
            <div className="searchLawadaContainer">
              <div className="searchBarContainer">
                <div className="searchImage">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/app-store/app-store-search-img.png"
                    alt="search icon"
                    className="search-img"
                  />
                </div>
                <input
                  type="search"
                  placeholder="Try logo,poster,anything!"
                  className="searchBar"
                  value={searchInput}
                  onChange={this.onChangeSearch}
                />
              </div>
            </div>
            <ul className="tabsContainer">
              {tabListItem.map(eachTab => (
                <TabItem
                  key={eachTab.tabId}
                  tabDetails={eachTab}
                  setActiveTabId={this.setActiveTabId}
                  isActive={activeTabId === eachTab.tabId}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="elementsSection">
          <ul className="elementsUlComponent">
            {filteredElements.map(eachElement => (
              <ElementItem
                key={eachElement.elementTabId}
                elementDetails={eachElement}
              />
            ))}
          </ul>
        </div>
        <div className="lower-SectionContainer mt-5">
          <div className="firstContainer">
            <img
              src="https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639586568/img-1_aybhwr.gif"
              className="firstImage"
              alt="startInspired"
            />
            <div className="contentContainerLower one">
              <h1 className="lowerContentHead">Start Inspired</h1>
              <p className="lowerContainerPara">
                With thousands of professional templates,images and quality
                content to choose from, get a headstart on bringing your best
                Ideas and work to life
              </p>
              <div className="lowerContentButtonContainer">
                <button className="contentButton" type="button">
                  Create a Design
                </button>
              </div>
            </div>
          </div>
          <div className="firstContainer">
            <img
              src="https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639586681/ezgif-4-a721de5c13_rnu6rv.gif"
              className="secondImage contentImage"
              alt="startInspired"
            />
            <div className="contentContainerLower two">
              <h1 className="lowerContentHead">Collab with ease</h1>
              <p className="lowerContainerPara">
                Invite people to edith with you or set your whole team up in
                Canva pro to manage brand assets ,leave feedback,get
                approvals,and scale your visual content
              </p>
              <div className="lowerContentButtonContainer">
                <button className="contentButton" type="button">
                  Work Together
                </button>
              </div>
            </div>
          </div>
          <div className="firstContainer">
            <img
              src="https://static.canva.com/anon_home/benefits-share-en-1260x796.png"
              className="thirdImage"
              alt="startInspired"
            />
            <div className="contentContainerLower one">
              <h1 className="lowerContentHead">Start Pride</h1>
              <p className="lowerContainerPara">
                Weather you&apos;re presenting, downloading, scheduling,
                sharing, or printing, enjoy seeing your work make an impact in
                the real world
              </p>
              <div className="lowerContentButtonContainer">
                <button className="contentButton" type="button">
                  Design your Vision
                </button>
              </div>
            </div>
          </div>{' '}
          <div className="lowerGalleryContainer mt-5">
            <h1 className="lowerGalleryHeading">
              Templates for absolutely anything
            </h1>
            <p className="galleryPara">
              Customize an office template,or design something more personal,
              like an Invitation
            </p>
            <ul className="galleryLists">
              {templateList.map(eachImage => (
                <GalleryList
                  imageDetails={eachImage}
                  key={eachImage.templateId}
                />
              ))}
            </ul>
            <div className="galleryButtonContainer mt-5">
              <button className="galleryButton" type="button">
                Browse all Templates
              </button>
            </div>
          </div>
          <div className="soloContainer mt-5">
            <h1 className="lowerGalleryHeading">Work Solo, or as a Team</h1>
            <p className="galleryPara">
              Weather You are on your own or part of a small,big,local or global
              team, get all your work and communication done here, on-brand
              everytime
            </p>
            <div className="lowerSoloContainer">
              <img
                src="https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639586806/3rd_image_caputw.gif"
                className="contentImage"
                alt="soloImg"
              />
              <div className="soloContentContainer">
                <div className="singleSoloContent">
                  <i className="far fa-folder soloIcons"> </i>
                  <p className="soloPara">
                    <b>Team folders</b> to help you stay organised, store brand
                    assets and manage content
                  </p>
                </div>
                <div className="singleSoloContent">
                  <i className="fas fa-mobile-alt soloIcons mr-3"> </i>
                  <p className="soloPara">
                    <b>Plan, create, schedule and publish </b> your social media
                    posts directly from canva
                  </p>
                </div>
                <div className="singleSoloContent">
                  <i className="fas fa-user-plus soloIcons ml-0"> </i>
                  <p className="soloPara">
                    <b>Real-Time collaboration</b> across countries, companies
                    and department
                  </p>
                </div>
                <div className="singleSoloContent">
                  <i className="far fa-comments soloIcons mr-1"> </i>
                  <p className="soloPara">
                    <b>Built-in Comments</b> to communicate,work,and resolve
                    suggestions in real time
                  </p>
                </div>
              </div>
            </div>
            <div className="galleryButtonContainer mt-5">
              <button className="galleryButton" type="button">
                See work solutions
              </button>
            </div>
          </div>
          <div className="soloContainer canvaSubSoloContainer mt-5">
            <h1 className="lowerContentHead">A perfect fit for every Team</h1>
            <div className="cTypesCont">
              <div className="canvSubContainers">
                <h1 className="canvaSubHeading">Canva Free</h1>
                <p className="canvaSubPara">
                  For people and teams wanting to design absolutely anything,
                  from logos and social media content to documents, prints and
                  more. Tons of free templates, photos and fonts to bring your
                  vision to life.
                </p>
                <div className="signupButton">
                  <button className="footerButton" type="button">
                    Get canva Free
                  </button>
                </div>
              </div>
              <div className="canvSubContainers">
                <div className="subCanvaHead">
                  <i className="fas fa-crown goldenColor"> </i>
                  <h1 className="canvaSubHeading">Canva Pro</h1>
                </div>
                <p className="canvaSubPara">
                  For people and teams wanting to collaborate and grow their
                  business. Includes social scheduling, team templates, brand
                  management and other productivity tools.
                </p>
                <div className="signupButton">
                  <button className="footerButton" type="button">
                    Start Free Trial
                  </button>
                </div>
              </div>
              <div className="canvSubContainers">
                <h1 className="canvaSubHeading">Canva Enterprise</h1>
                <p className="canvaSubPara">
                  For large organisations needing design and communication tools
                  at scale. Simplify your teams’ work with integrations to tools
                  you use every day, advanced security and built-in approval
                  workflows. Minimum 20 users.
                </p>
                <div className="signupButton">
                  <button className="footerButton" type="button">
                    Request a Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="belowContainer mt-5">
            <h1 className="lowerContentHead">
              Loved by people and Business around the world
            </h1>
            <ul className="carouselList">
              {lowerImagesList.map(eachPart => (
                <LowerCarousel key={eachPart.lowerId} cardDetails={eachPart} />
              ))}
            </ul>
          </div>
          <hr className="hrClass" />
          <div className="footerContainer d-flex">
            <div className="footerSubContainers">
              <h1 className="footerHead">Discover</h1>
              <p className="footerP">Logos</p>
              <p className="footerP">Posters</p>
              <p className="footerP">Business Cards</p>
            </div>
            <div className="footerSubContainers">
              <h1 className="footerHead">Explore</h1>
              <p className="footerP">Design Types</p>
              <p className="footerP">Templates</p>
              <p className="footerP">Graphs & Charts</p>
            </div>
            <div className="footerSubContainers">
              <h1 className="footerHead">Learn</h1>
              <p className="footerP">Blog</p>
              <p className="footerP">Design School</p>
              <p className="footerP">Business Cards</p>
            </div>
            <div className="footerSubContainers">
              <h1 className="footerHead">Resources</h1>
              <p className="footerP">Font Combinations</p>
              <p className="footerP">Photo Editors</p>
              <p className="footerP">Color Wheel</p>
            </div>
            <div className="footerSubContainers">
              <h1 className="footerHead">Product</h1>
              <p className="footerP">Download App</p>
              <p className="footerP">Pro</p>
              <p className="footerP">Enterprise</p>
            </div>
            <div className="footerSubContainers">
              <h1 className="footerHead">Company</h1>
              <p className="footerP">About</p>
              <p className="footerP">Terms and Privacy</p>
              <p className="footerP">Careers</p>
            </div>
          </div>
          <hr className="hrClass" />
          <div className="footerEnd">
            <div className="selectBox">
              <label htmlFor="footerLang" className="pointerCursor">
                {' '}
              </label>
              <select
                id="footerLang"
                className="footerOptions"
                onChange={this.onChangeOption}
              >
                <option className="optionsClass">English</option>
              </select>
            </div>
            <div className="footerTermsnAndConditions d-flex">
              <p className="footerPara">
                <a
                  href="https://www.canva.com/policies/"
                  className="copyrightsPara"
                >
                  Terms
                </a>{' '}
                and{' '}
                <a
                  href="https://www.canva.com/policies/privacy-policy/"
                  className="copyrightsPara"
                >
                  Privacy
                </a>
              </p>
              <br className="footerBreak" />
              <p className="copyrightsPara">
                &copy; 2021 All Rights Reserved,Canva <sup>&reg;</sup>
              </p>
            </div>
            <div className="footerFollowAccounts">
              <a href="http://www.facebook.com/canva">
                <i className="fab fa-facebook socialIcons "> </i>
              </a>
              <a href="http://www.twitter.com/canva">
                <i className="fab fa-twitter socialIcons"> </i>
              </a>
              <a href="http://www.pinterest.com/canva">
                <i className="fab fa-pinterest socialIcons"> </i>
              </a>
              <a href="http://www.instagram.com/canva">
                <i className="fab fa-instagram red socialIcons"> </i>
              </a>
            </div>
          </div>
          <div className="footerButton1 fixed-bottom">
            <button className="signupButton1" type="button">
              Start Designing
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default canvaHome
