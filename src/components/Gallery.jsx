import React,{ useState } from 'react'
// mui
import { 
    Typography,
    Box,
    Stack,
} from "@mui/material";
// carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// components
import Title from './Title'
import Paragraph from './Paragraph'


const Gallery = () => {
    
    const [currentIndex, setCurrentIndex] = useState();

    const imageData = [
        {
            alt: 'image1',
            url: 'https://www.citchennai.edu.in/wp-content/uploads/2019/08/Impulse-copy.jpg'
        },
        {
            alt: 'image2',
            url: 'https://www.citchennai.edu.in/wp-content/uploads/2019/02/news-8.jpg'
        },
        {
            alt: "image3",
            url: 'https://www.citchennai.edu.in/wp-content/uploads/2019/02/news-4.jpg'
        },
        {
            alt: "image4",
            url: 'https://www.knowafest.com/files/uploads/WhatsApp%20Image%202021-04-27%20at%206.34.28%20PM-2021050102.jpeg'
        },
        {
            alt: "image5",
            url: 'https://i0.wp.com/www.indcareer.com/events/wp-content/uploads/2022/05/278932752_2110016742499286_8240520949804590596_n.jpeg?fit=1080%2C1080&ssl=1'
        },
        {
            alt: "image6",
            url: 'https://www.citchennai.edu.in/wp-content/uploads/2019/08/Vidyutrens-copy.jpg'
        },
        {
            alt: "image7",
            url: 'https://qcademics.com/wp-content/uploads/2021/05/179052319_144342657662839_314963214117675869_n-1.jpg'
        },
        {
            alt: "image8",
            url: 'https://www.citchennai.edu.in/wp-content/uploads/2019/08/Mechgust-copy-1.jpg'
        },
        {
            alt: "image9",
            url: 'https://www.citchennai.edu.in/wp-content/uploads/2019/02/news-6.jpg'
        },
        {
            alt: "image10",
            url: 'https://www.citchennai.edu.in/wp-content/uploads/2019/02/Jarvis-2019.png'
        },
    ];
  
    const renderSlides = imageData.map((image) => (
    <div key={image.alt}>
        <img src={image.url} alt={image.alt} />
    </div>
    ));


    const handleChange = (index) => {
        setCurrentIndex(index);
    }

    return (
        <Stack
        direction='column'
        justifyContent= 'center'
        alignItems= 'center'
        sx={{
            py: 8,
            px: 2,
            display: { xs: 'flex'},
        }}
        >
            <Box
            component='section'
            sx={{
                paddingBottom: 3,
            }}
            >
                <Title 
                text={
                    'Upcoming Events'
                }
                textAlign={'center'}
                />
                <Typography
                variant='h5'
                component='h4'
                align='center'
                sx={{
                    paddingTop: 1,
                }}
                >
                    List of events in February
                </Typography>
                <Paragraph text={
                    'Unlock Your Potential at this Month Event!\
                    '
                } 
                maxWidth = {'sm'}
                mx={'auto'}
                textAlign={'center'}
                />
            </Box>
            
            <Box sx={{ 
                maxWidth: 700,
                width: '100%',
            }}>
                <Carousel
                centerSlidePercentage={40}
                thumbWidth={180}
                dynamicHeight={false}
                centerMode={false}
                showArrows={false}
                autoPlay={false}
                infiniteLoop={true}
                selectedItem={imageData[currentIndex]}
                onChange={handleChange}
                className="carousel-container"
                >
                {renderSlides}
                </Carousel>
            </Box>
        </Stack>
    )
}

export default Gallery