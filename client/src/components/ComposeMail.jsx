import { useState } from 'react'

import { Dialog,Box, Typography, styled, InputBase ,TextField, Button} from '@mui/material'
import {  Close, DeleteOutline } from '@mui/icons-material'
import useApi from '../hooks/useApi';
import { API_URLS } from '../services/api.urls';
const dialogStyle = {
    height:'90%',
    width:'80%',
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow:'none',
    borderRadius:'10px 10px 0 0'
}
const Header = styled(Box)({
    display:'flex',
    justifyContent:'space-between',
    padding:'10px 15px',
    background:'#f2f6fc',
    '& > p':{
        fontSize:14,
        fontWeight:500
    }
})

const RecipientsWrapper = styled(Box)({
    display:'flex',
    flexDirection:'column',
    padding:'0 15px',
    '& > div':{
        fontSize:14,
        borderBottom:'1px solid #F5F5F5',
        marginTop:10
    }
})

const Footer = styled(Box)({
    display:'flex',
    justifyContent:"space-between",
    padding:'10px 15px',
    alignItems:'center'

})
const SendButton = styled(Button)({
    background:'#0B57D0',
    color:'#fff',
    fontWeight:500,
    textTransform:'none',
    borderRadius:18,
    width:100
})

const ComposeMail = ({openDialog , setOpenDialog})=>{
    
    const [data,setData] = useState({});
    const sentEmailService = useApi(API_URLS.saveSentEmail);
    const saveDraftService=useApi(API_URLS.saveDraftEmails);
    const config = {
        Host : "smtp.elasticemail.com",
        Username : "shivam272126@yopmail.com",
        Password : "AAE4DE7924A707F2B90D74161781B6E3A772",
        Port: 2525,
    }
      
    const closeComposeMail = (e) =>{
       e.preventDefault();
       //setOpenDialog(false)

       const payload = {
        to:data.to,
        from:'shivamr3024@gmail.com',
        Subject : data.subject,
        body : data.body,
        date : new Date(),
        image : ' ',
        name: 'shivam kumar',
        starred: false,
        type : 'drafts'
       }
       saveDraftService.call(payload);
       if (!saveDraftService.error) {
        setOpenDialog(false);
        setData({});
       }else{

       }

    }
    const sendMail = (e)=>{

        e.preventDefault()

        if (window.Email) {
            window.Email.send({
                ...config,
                To : data.to,
                From : "shivamr3024@gmail.com",
                Subject : data.subject,
                Body : data.body
           }).then(
           message => alert(message)
           );
       }

       const payload = {
        to:data.to,
        from:'shivamr3024@gmail.com',
        Subject : data.subject,
        body : data.body,
        date : new Date(),
        image : ' ',
        name: 'shivam kumar',
        starred: false,
        type : 'sent'
       }
       sentEmailService.call(payload);
       if (!sentEmailService.error) {
        setOpenDialog(false);
        setData({});
       }else{

       }

        setOpenDialog(false)
    }

 const onValueChange=(e)=>{
    setData({...data,[e.target.name]: e.target.value});

 }

    return(
        <Dialog
        open={openDialog}
        PaperProps={{ sx:dialogStyle}}
        >
            <Header>
                <Typography>New Message</Typography>
                <Close fontSize='small' onClick={ (e)=> closeComposeMail(e)} />
            </Header>
            <RecipientsWrapper>
             <InputBase placeholder='Recipients'name='to' onChange={(e)=> onValueChange(e)}/>
             <InputBase placeholder='Subject' name='subject' onChange={(e)=> onValueChange(e)} />
            </RecipientsWrapper>
            <TextField 
            multiline
            rows={14}
            sx={{'& .MuiOutlinedInput-notchedOutline' :{border:'none'}}}
            name='body'
            onChange={(e)=> onValueChange(e)}
            />
                
            <Footer>
             <SendButton onClick={(e)=>sendMail(e) }>Send</SendButton>
             <DeleteOutline onClick={()=>setOpenDialog(false)} />
            </Footer>
        </Dialog>
    )
}
export default ComposeMail