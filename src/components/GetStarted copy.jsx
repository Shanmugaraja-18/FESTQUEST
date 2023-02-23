import React from 'react'
import { 
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material'
import Title from './Title'
// img
import imgDetail from '../assets/image1.jpg';
import imgDetail2 from '../assets/image2.jpg';


const GetStarted = () => {

    const CustomGridItem = styled(Grid) ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    })
    
    const CustomTypography = styled(Typography) ({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: '#515151',
        marginTop: '1.5rem',
    })

    return (
            
        <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}   
        sx={{
            py: 10,
            px: 2,
             
        }}
        >
            <CustomGridItem item xs={12} sm={8} md={6} 
            component = 'section'
           
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        'Symposium and Hackathons'
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                    Symposium is a great opportunity for students, faculty, and staff to come together to learn, to collaborate,
                     and to share knowledge and experiences. During this symposium, we will explore a range of topics related to higher education and have meaningful discussions about the challenges and opportunities 
                     we face in todays college environment.These event will provide a unique opportunity to learn from experts, thought leaders, and advisors in higher education<br />
                    </CustomTypography> 
                </Box>

            </CustomGridItem>
            
            <Grid item xs={12} sm={4} md={6}>
                <img src={imgDetail} alt="" 
                style={{
                    width: '100%',
                }}
                />
            </Grid>

            

            <Grid item xs={12} sm={4} md={6}
            sx={{
                order: {xs: 4, sm: 4, md: 3}
            }}
            >
                <img src={imgDetail2} alt="" 
                style={{ 
                    width: "100%",
                }}
                />
            </Grid>

            <CustomGridItem item xs={12} sm={8} md={6}
            sx={{
                order: {xs: 3, sm: 3, md: 4}
            }}
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        'Culturals and Sports Event'
                        
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                    we have an array of activities planned for you, from cultural activities such as dance and music performances, to sports activities like basketball and soccer tournaments. 
                    You can also take part in a variety of fun activities, such as face painting, karaoke,etc.,The culturals is designed for students and their families to explore and participate in the various
                     cultural and sports events hosted by the college. The event areorganized throughout the year that enable students to express their talents and skills, while also having fun.
                    </CustomTypography>
                </Box>
                
            </CustomGridItem>
        </Grid>

        

        
    )
}

export default GetStarted;