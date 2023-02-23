import React, {useState} from 'react'
import {  
    Box,
    Button,
    Stack,
    TextField
} from '@mui/material'
import Title from './Title'
import Paragraph from './Paragraph'

const Details = () => {

    const [input, setInput] = useState({
        email: '',
        collegename: '',
        // city:'',
        // date:'',
        // studentId: '',
        // phone:'',
        // link:''
    })

    function handleChange(event){
        const {name,value} = event.target;

        setInput(prevInput => {
        return {
            ...prevInput,
            [name]: value
        }
        })
    }

    function handleClick(event){
        event.preventDefault();
        console.log(input);
    }

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const data = new FormData(event.currentTarget);
    //     console.log({
    //         email: data.get('email'),
    //         phone: data.get('phone'),
    //     });
    // }


    return (
        <Stack 
        component='section'
        direction="column"
        justifyContent= 'center'
        alignItems='center'
        sx={{
            py: 10,
            px: 2,
        }}
        >
            <Title 
            text={
                'Thanks for your Interest to promote your event with our website'
                } 
            textAlign={'center'}
            />
            <Paragraph 
            text={
                'We are delighted that you have chosen our website for your promotional needs.ur team is dedicated to helping you succeed. We will provide you with personalized customer service, detailed analytics, and the latest technology to help you reach your target audience \
                we will contact you soon.In case of any query feel free to contact us with our email .'
            }
            maxWidth = {'sm'}
            mx={0}
            textAlign={'center'}
            />

            <Box 
            component="form" 
            noValidate 
            // onSubmit={handleSubmit} 
            sx={{ 
                mt: 1,
                py: 2
            }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    value={input.email}
                    onChange={handleChange}
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="college name"
                    label="College Name"
                    value={input.name}
                    onChange={handleChange}
                    name="collegename"
                    autoComplete="collegename"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="City"
                    label="City"
                    value={input.city}
                    onChange={handleChange}
                    name="city"
                    autoComplete="city"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="Date"
                    label="Event Date"
                    value={input.date}
                    onChange={handleChange}
                    name="date"
                    type="date"
                    autoComplete="date"
                    autoFocus
                />
                
                
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="StudentId"
                    label="Student Id"
                    value={input.studentId}
                    onChange={handleChange}
                    name="studentId"
                    autoComplete="studentId"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="phone"
                    label="Phone Number"
                    value={input.phone}
                    onChange={handleChange}
                    type="phone"
                    id="phone"
                    autoComplete="current-phone"
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="Link"
                    label="Event Link"
                    value={input.link}
                    onChange={handleChange}
                    name="link"
                    type="url"
                    autoComplete="url"
                    autoFocus
                />
                <Button 
                variant="contained" 
                fullWidth
                type="submit"
                onClick={handleClick}
                size="medium"
                sx= {{ 
                    fontSize: '0.9rem',
                    textTransform: 'capitalize', 
                    py: 2,
                    mt: 3, 
                    mb: 2,
                    borderRadius: 0,
                    backgroundColor: '#14192d',
                    "&:hover": {
                        backgroundColor: '#1e2a5a',
                    }
                }}
                >
                    send
                </Button>
            </Box>
        </Stack>
    )
}

 export default Details;




// import React from 'react'
// import {  
//     Box,
//     Button,
//     Stack,
//     TextField
// } from '@mui/material'
// import Title from './Title'
// import Paragraph from './Paragraph'

// const Details = () => {

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const data = new FormData(event.currentTarget);
//         console.log({
//             email: data.get('email'),
//             phone: data.get('phone'),
//         });
//     }


//     return (
//         <Stack 
//         component='section'
//         direction="column"
//         justifyContent= 'center'
//         alignItems='center'
//         sx={{
//             py: 10,
//             px: 2,
//         }}
//         >
//             <Title 
//             text={
//                 'Thanks for your Interest to promote your event with our website'
//                 } 
//             textAlign={'center'}
//             />
//             <Paragraph 
//             text={
//                 'We are delighted that you have chosen our website for your promotional needs.ur team is dedicated to helping you succeed. We will provide you with personalized customer service, detailed analytics, and the latest technology to help you reach your target audience \
//                 we will contact you soon.In case of any query feel free to contact us with our email .'
//             }
//             maxWidth = {'sm'}
//             mx={0}
//             textAlign={'center'}
//             />

//             <Box 
//             component="form" 
//             noValidate 
//             onSubmit={handleSubmit} 
//             sx={{ 
//                 mt: 1,
//                 py: 2
//             }}>
//                 <TextField
//                     margin="normal"
//                     required
//                     fullWidth
//                     id="email"
//                     label="Email Address"
//                     name="email"
//                     autoComplete="email"
//                     autoFocus
//                 />
//                 <TextField
//                     margin="normal"
//                     required
//                     fullWidth
//                     id="college name"
//                     label="College Name"
//                     name="collegename"
//                     autoComplete="collegename"
//                     autoFocus
//                 />
//                 <TextField
//                     margin="normal"
//                     required
//                     fullWidth
//                     id="City"
//                     label="City"
//                     name="city"
//                     autoComplete="city"
//                     autoFocus
//                 />
//                 <TextField
//                     margin="normal"
//                     required
//                     fullWidth
//                     id="Date"
//                     label="Event Date"
//                     name="date"
//                     type="date"
//                     autoComplete="date"
//                     autoFocus
//                 />
                
                
//                 <TextField
//                     margin="normal"
//                     required
//                     fullWidth
//                     id="StudentId"
//                     label="Student Id"
//                     name="studentId"
//                     autoComplete="studentId"
//                     autoFocus
//                 />
//                 <TextField
//                     margin="normal"
//                     required
//                     fullWidth
//                     name="phone"
//                     label="Phone Number"
//                     type="phone"
//                     id="phone"
//                     autoComplete="current-phone"
//                 />
//                 <TextField
//                     margin="normal"
//                     required
//                     fullWidth
//                     id="Link"
//                     label="Event Link"
//                     name="link"
//                     type="url"
//                     autoComplete="url"
//                     autoFocus
//                 />
//                 <Button 
//                 variant="contained" 
//                 fullWidth
//                 type="submit"
//                 size="medium"
//                 sx= {{ 
//                     fontSize: '0.9rem',
//                     textTransform: 'capitalize', 
//                     py: 2,
//                     mt: 3, 
//                     mb: 2,
//                     borderRadius: 0,
//                     backgroundColor: '#14192d',
//                     "&:hover": {
//                         backgroundColor: '#1e2a5a',
//                     }
//                 }}
//                 >
//                     send
//                 </Button>
//             </Box>
//         </Stack>
//     )
// }

// export default Details;