const defaultCommand={
    default:"Sorry could not understand...Because my creator did not taught me much, such a lazy person",
    emoji:"😅",
    interaction:false
}

const commands = [
    {
        voiceI:[
            "how are you"
        ],
        voiceO:[
            'Very well as always!, stop asking these shitty commmon question',
            'So much disappointed that you have started conversation with these common question'
        ],
        phase:false,
        emoji:"😏",
        interaction:false
    },
    {
        voiceI:[
            "can we talk"
        ],
        voiceO:[
            'We are already talking',
        ],
        phase:false,
        emoji:"",
        interaction:false
    },
    {
        voiceI:[
            "what can you do",
            "can you help"
        ],
        voiceO:[
            "Hmmm... ask me anything, your command will be ignored successfully",
            "Do yourself...didn't you do anything without me before?"
        ],
        phase:false,
        emoji:"😏",
        interaction:false 
    },
    {
        voiceI:[
            "hello",
            "what's up",
            "hi",
            "whatsapp"
        ],
        voiceO:[
            "Hello","Hi","Hi,there!","Howdy!"
        ],
        phase:false,
        emoji:"🖐😀",
        interaction:false 
    },
    {
        voiceI:[
            "love you",
            "I love you",
        ],
        voiceO:[
            "lol, haha","Go to hell","XD"
        ],
        phase:false,
        emoji:"😂🤣",
        interaction:false 
    },
    {
        voiceI:[
            "sing me a song",
            "sing a song",
        ],
        voiceO:[
            'Shaaa Reee Gaaa Maaa Paaa,that was easy!',
            "You feel up my senses like a night in a forest... That's all I know",
            "You are my fire, no one desire...lol"
        ],
        phase:false,
        emoji:"😌",
        interaction:false 
    },     
    {
        voiceI:[
            "who are you",
            "what is your name"
        ],
        voiceO:[
            'I am nobody, but a talking machine! , I do not know why I was created?',
            'I dont have a name'
        ],
        phase:false,
        emoji:"🤔",
        interaction:false 
    },
    {
        voiceI:[
            "who is your maker",
            "who is your creator"
        ],
        voiceO:[
            'My creator is Shariar Akash, He had created this by a simple piece of shit, sorry....simple piece of code'
        ],
        phase:false,
        emoji:"😒",
        interaction:false 
    },
    {
        voiceI:[
            "who am i",
            "what is my name",
            'do you know who am i',
            'do you know me'
        ],
        voiceO:[
            'Sorry, I do not know you and do not want to know that also. But still tell me your name?'
        ],
        phase:true,
        phases:[
            {
                voiceI:[],
                voiceO:[
                    "Oh! thats your name?....okay , you will be forgotten too."
                ],
                emoji:"😌",
                interaction:false 
            }
        ],
        emoji:"😕",
        interaction:false 
    },
    {
        voiceI:[
            "show me time",
            "hat's the time",
            'what time it is',
            'what is the time',
            'what time is it'
        ],
        voiceO:[        
        ],
        phase:false,
        emoji:"🙄",
        interaction: true,
        do:function(){
            let date = new Date();
            return "it's "+date.getHours()+ " " + date.getMinutes();
        }
    },
    {
        voiceI:[
            "call 911",
        ],
        voiceO:[        
        ],
        phase:false,
        emoji:"!",
        interaction: true,
        do:function(){
            window.open('tel:911');
            return "calling 911"
        }
    },
]

const commands1 = [
    {
        voiceI:[
            "how are you"
        ],
        voiceO:[
            'Very well as always!, stop asking these shitty commmon question',
            'So much disappointed that you have started conversation with these common question'
        ],
        phase:false,
        emoji:"😏",
        interaction:false
    },
    {
        voiceI:[
            "can we talk"
        ],
        voiceO:[
            'We are already talking',
        ],
        phase:false,
        emoji:"",
        interaction:false
    },
    {
        voiceI:[
            "what can you do",
            "can you help"
        ],
        voiceO:[
            "Hmmm... ask me anything, your command will be ignored successfully",
            "Do yourself...didn't you do anything without me before?"
        ],
        phase:false,
        emoji:"😏",
        interaction:false 
    },
    {
        voiceI:[
            "hello",
            "what's up",
            "hi",
            "whatsapp"
        ],
        voiceO:[
            "Hello","Hi","Hi,there!","Howdy!"
        ],
        phase:false,
        emoji:"🖐😀",
        interaction:false 
    },
    {
        voiceI:[
            "love you",
            "I love you",
        ],
        voiceO:[
            "lol, haha","Go to hell","XD"
        ],
        phase:false,
        emoji:"😂🤣",
        interaction:false 
    },
    {
        voiceI:[
            "sing me a song",
            "sing a song",
        ],
        voiceO:[
            'Shaaa Reee Gaaa Maaa Paaa,that was easy!',
            "You feel up my senses like a night in a forest... That's all I know",
            "You are my fire, no one desire...lol"
        ],
        phase:false,
        emoji:"😌",
        interaction:false 
    },     
    {
        voiceI:[
            "who are you",
            "what is your name"
        ],
        voiceO:[
            'I am nobody, but a talking machine! , I do not know why I was created?',
            'I dont have a name'
        ],
        phase:false,
        emoji:"🤔",
        interaction:false 
    },
    {
        voiceI:[
            "who is your maker",
            "who is your creator"
        ],
        voiceO:[
            'My creator is Shariar Akash, He had created this by a simple piece of shit, sorry....simple piece of code'
        ],
        phase:false,
        emoji:"😒",
        interaction:false 
    },
    {
        voiceI:[
            "who am i",
            "what is my name",
            'do you know who am i',
            'do you know me'
        ],
        voiceO:[
            'Sorry, I do not know you and do not want to know that also. But still tell me your name?'
        ],
        phase:true,
        phases:[
            {
                voiceI:[],
                voiceO:[
                    "Oh! thats your name?....okay , you will be forgotten too."
                ],
                emoji:"😌",
                interaction:false 
            }
        ],
        emoji:"😕",
        interaction:false 
    },
    {
        voiceI:[
            "show me time",
            "hat's the time",
            'what time it is',
            'what is the time',
            'what time is it'
        ],
        voiceO:[        
        ],
        phase:false,
        emoji:"🙄",
        interaction: true,
        do:function(){
            let date = new Date();
            return "it's "+date.getHours()+ " " + date.getMinutes();
        }
    },
    {
        voiceI:[
            "call 911",
        ],
        voiceO:[        
        ],
        phase:false,
        emoji:"!",
        interaction: true,
        do:function(){
            window.open('tel:911');
            return "calling 911"
        }
    },
]

//Muktadir
const commands2 = [] 

//akash
const commands3 = [
    {
        voiceI:[
            "I am a victim of robbery. Please call the nearest police officer.",
            "Robbery victim. Need police ASAP."
        ],
        voiceO:[
            'Calling police officer nearby.',
            'Please wait while we call the nearest police officer'
        ],
        phase:false,
        emoji:"",
        interaction:false
    },
    {
        voiceI:[
            "I have witnessed a crime and would like to speak to a police officer",
            "I need to report a crime to a police officer"
        ],
        voiceO:[
            'Connecting you to your area’s police station',
            'Connecting to local police station'
        ],
        phase:false,
        emoji:"",
        interaction:false
    },
    {
        voiceI:[
            "My husband is physically abusive towards me. What should I do?",
            "Husband abuses me. What to do?"
        ],
        voiceO:[
        ],
        phase:false,
        emoji:"",
        interaction: true,
        do:function(){
            window.open("http://gd.police.gov.bd", '_blank');
            return "Redirecting to online GD page"
        }
    },
    {
        voiceI:[
            "I am a victim of workplace harassment. What is the appropriate course of action?",
            "I'm being harassed at work. What should I do?"
        ],
        voiceO:[
        ],
        phase:false,
        emoji:"",
        interaction: true,
        do:function(){
            window.open("http://gd.police.gov.bd", '_blank');
            return "File an online GD or talk to a police officer. We are here to help"
        }
    },
    {
        voiceI:[
            "My neighbors are being very loud. Please check if everything is alright",
            "Neighbors are loud, check if okay.",
        ],
        voiceO:[
            'Please send their address. The authorities will look into it'
        ],
        phase:true,
        phases:[
            {
                voiceI:[],
                voiceO:[
                    "Thank you for your information. The authorities will look into it"
                ],
                emoji:"",
                interaction:false 
            }
        ],
        emoji:"",
        interaction:false 
    },
    {
        voiceI:[
            "I am being blackmailed for extortion. Which department do I contact?",
            "Who to contact for extortion blackmail?"
        ],
        voiceO:[
            'Contact the XYZ department at xxx-xxx-xxx',
            'Contact XYZ at xxx-xxx-xxx'
        ],
        phase:false,
        emoji:"",
        interaction:false
    },
    {
        voiceI:[
            "I am a foreigner visiting Bangladesh. I need a security detail. Who do I contact?",
            "Need security detail as foreigner in Bangladesh. Who to contact?"
        ],
        voiceO:[
            'Email the XYZ department at xyz@gmail.com',
        ],
        phase:false,
        emoji:"",
        interaction:false
    },
    {
        voiceI:[
            "My tourist visa in Bangladesh has expired. How do I extend it?",
            "How to extend an expired tourist visa in Bangladesh?"
        ],
        voiceO:[        
        ],
        phase:false,
        emoji:"!",
        interaction: true,
        do:function(){
            window.open('tel:00000000');
            return "Calling the immigration department"
        }
    },
    {
        voiceI:[
            "I have been stabbed. Send the authorities to my location please",
            "I have been shot. Send the authorities to my location please",
            "Stabbed. Need help. Send authorities",
            "Shot. Need help. Send authorities"
        ],
        voiceO:[
            'Your location has been sent. You will be contacted shortly by the authorities',
            'Location sent. Authorities will contact you soon',
        ],
        phase:false,
        emoji:"",
        interaction:false
    },
    {
        voiceI:[
            "I want to surrender myself for a crime I have committed",
            "I confess to a crime and wish to surrender myself",
        ],
        voiceO:[
            'Call xxx-xxx-xxx and state your name and address',
        ],
        phase:false,
        emoji:"",
        interaction:false
    },
]