import React from 'react'
import { 
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material'
import Title from './Title'
// img
import imgDetail1 from '../assets/Symposium.jpeg';
import imgDetail2 from '../assets/sports.jpg';
import imgDetail3 from '../assets/workshop.jpeg';
import imgDetail4 from '../assets/lit.jpeg';
import imgDetail5 from '../assets/cultural.jpeg';
import imgDetail6 from '../assets/hack.jpeg';
import imgDetail8 from '../assets/talk.jpg';



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
            py: 0,
            px: 0,
             
        }}
        >
            

        

        <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}   
        sx={{
            py: 10,
            px: 2,
             
        }}
        >
            

           
            
        </Grid>

        <Grid container spacing={{ xs: 1, sm: 0, md: 0 }}   
        sx={{
            py: 0,
            px: 0,
             
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
                        'WORKSHOP'
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                    workshop is a short event designed to help students learn more about a particular topic or skill. Workshops can be organized by the college itself or hosted by an outside group. Workshops may involve lectures, hands-on activities, demonstrations, and group discussions. They may cover a wide range of topics, from career exploration to computer programming to resume writing. Workshops are 
                    a great way for students to gain new knowledge, develop their skills, and network with professionals in the field.
                    </CustomTypography> 
                </Box>

            </CustomGridItem>
            
            <Grid item xs={12} sm={4} md={6}>
                <img src={imgDetail3} alt="" 
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
                <img src={imgDetail4} alt="" 
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
                        'LITERARY'
                        
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                    A literary competition is a contest in which participants submit works of literature, usually in the form of essays, poems, or stories. These works are then judged by a panel of experts and the winners receive a prize. Literary competitions can be organized at the local, regional, national, or international level.
                     They are often sponsored by organizations such as libraries, literary magazines, universities, or foundations
                    </CustomTypography>
                </Box>
            </CustomGridItem>

            

            

            
        </Grid>

        <Grid container spacing={{ xs: 1, sm: 0, md: 0 }}   
        sx={{
            py: 0,
            px: 0,
             
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
                        'IDEATHON'
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                    An Ideathon is a type of event where people come together to create innovative solutions to a specific problem or challenge. The goal is to generate new ideas in a short period of time. Typically, teams are formed and given a specific amount of time to come up with a solution. At the end of the event, the teams present their ideas to a panel of judges who evaluate each concept. The winning team is usually awarded a prize. Ideathons are 
                    becoming increasingly popular in businesses and schools as a fun way to generate creative solutions for various problems
                    </CustomTypography> 
                </Box>

            </CustomGridItem>
            
            <Grid item xs={12} sm={4} md={6}>
                <img src={imgDetail6} alt="" 
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
                <img src={imgDetail5} alt="" 
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
                        'CULTURAL'
                        
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                    Cultural competitions are events that bring together people of different backgrounds to compete in activities related to their cultural heritage. Examples of cultural competitions include dance, music, singing, cooking, storytelling, and art. Participants in these competitions often come from different cultural backgrounds, and they compete to demonstrate their skills while representing their culture.
                     Competitions like these are a great way to celebrate and show appreciation for the diversity of cultures in our world.
                    </CustomTypography>
                </Box>
            </CustomGridItem>

            

            

            
        </Grid>
        <Grid container spacing={{ xs: 1, sm: 0, md: 0 }}   
        sx={{
            py: 0,
            px: 0,
             
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
                        'CAREER FAIR'
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                    Our career fair is a great opportunity for students and alumni to connect with employers and to learn about potential job 
                    and internship opportunities. The fair will feature a variety of employers from various industries, and will provide an opportunity 
                    for students to network, to practice their interviewing skills, and to learn more about the job market.
                    </CustomTypography> 
                </Box>

            </CustomGridItem>
            
            <Grid item xs={12} sm={4} md={6}>
                <img src={imgDetail1} alt="" 
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
                        'SPORTS'
                        
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                    Sports competition is a form of competition in which the goal is to win a sport or game. It is a form of physical activity that requires skill, strategy and athleticism to be successful. The most common sports competitions include football, soccer, basketball, baseball, tennis, golf, track and field, and swimming. There are many other popular sports competitions, such as volleyball, cricket, rugby, and ice hockey.
                     They are often sponsored by organizations such as libraries, literary magazines, universities, or foundations
                    </CustomTypography>
                </Box>
            </CustomGridItem>

            

            

            
        </Grid>
        <Grid container spacing={{ xs: 1, sm: 0, md: 0 }}   
        sx={{
            py: 0,
            px: 0,
             
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
                        'HACKATHON'
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                    A hackathon is a type of event, typically hosted by a company or organization, in which a large number of people come together to collaborate intensively on software projects. Hackathons typically involve brainstorming, coding, and creating prototypes in a short period of time. Participants work in teams to solve problems or develop applications, and the best projects are usually rewarded. Hackathons
                     are often used to encourage innovation and creative problem-solving, and they can be used as a recruiting tool.
                    </CustomTypography> 
                </Box>

            </CustomGridItem>
            
            <Grid item xs={12} sm={4} md={6}>
                <img src={imgDetail6} alt="" 
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
                <img src={imgDetail8} alt="" 
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
                        'TALKATHON'
                        
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                    A Talkathon is an event that involves a group of people talking about a specific topic for a set amount of time. This can be used as a way to generate ideas, discuss solutions to a problem, or simply to exchange ideas and perspectives. The duration of the event can range from a few hours to a few days, depending on the complexity and scope of the topic. Participants can work individually or in teams,
                     and the goal is to come up with as many meaningful ideas or solutions as possible.
                    </CustomTypography>
                </Box>
            </CustomGridItem>

            

            

            
        </Grid>
        </Grid>
        
    )
}

export default GetStarted;