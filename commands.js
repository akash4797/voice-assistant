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
const commands2 = [
    {
        voiceI:[
            "I am being followed. Call the appropriate police department to locate me and ensure my safety",
            "I am being followed. Call the appropriate police department to locate me and ensure my safety."
        ],
        voiceO:[

        ],
        phase:false,
        emoji:"",
        interaction: true,
        do:function(){
            window.open('tel:01727423032');
            return "The nearest police station is being contacted"
        }
    },

    {
        voiceI:[
            "Where is the nearest police station?",
            "Where is the nearest police station"
        ],
        voiceO:[
            'The nearest police station is the Motijheel Police Station',
            'Motijheel Police Station'
        ],
        phase:false,
        emoji:"",
        interaction:false
    },

    {
        voiceI:[
            "I want to file an online GD",
            "I want to file an online GD."
        ],
        voiceO:[
            
        ],
        phase:false,
        emoji:"",
        interaction:true,
        do:function(){
            window.open("http://gd.police.gov.bd", '_blank');
            return "Very well. Redirecting to the online GD form"
        }
    },

    {
        voiceI:[
            "Call the fire service department",
            "Call the fire service department."
        ],
        voiceO:[
        ],
        phase:false,
        emoji:"",
        interaction:true,
        do:function(){
            window.open('tel:01734007734');
            return "Calling fire service department"
        }
    },

    {
        voiceI:[
            "I am a victim of physical assault. Please help me.",
            "I am a victim of physical assault. Please help me"
        ],
        voiceO:[
        ],
        phase:false,
        emoji:"",
        interaction:true,
        do:function(){
            window.open("http://gd.police.gov.bd", '_blank');
            return "File your complaint in the online GD form. Redirecting there."
        }
    },

    {
        voiceI:[
            "Who should I contact to give crucial information for a police case?",
            "Who should I contact to give crucial information for a police case"
        ],
        voiceO:[
            'Contact XYZ department at xxx-xxx-xxx, call: XXX'
        ],
        phase:false,
        emoji:"",
        interaction:false
    },

    {
        voiceI:[
            "My car has been towed by police. Where can I find it?",
            "My car has been towed by police. Where can I find it"
        ],
        voiceO:[
            'Contact your nearest police station'
        ],
        phase:false,
        emoji:"",
        interaction:false
    },

    {
        voiceI:[
            "Someone is sending me abusive messages via a social networking site. Who do I contact regarding this?",
            "Someone is sending me threatening messages via a social networking site. Who do I contact regarding this?",
            "Someone is sending me offensive messages via a social networking site. Who do I contact regarding this?",
            "Someone is sending me abusive messages via a social networking site. Who do I contact regarding this",
            "Someone is sending me threatening messages via a social networking site. Who do I contact regarding this",
            "Someone is sending me offensive messages via a social networking site. Who do I contact regarding this"  
        ],
        voiceO:[
            'Provide the name and details of your abuser',
            'File online GD here, abcd.xyz'
        ],
        phase:false,
        emoji:"",
        interaction:false
    },
    
    {
        voiceI:[
            "My vehicle has been in an accident. Please call the nearest police station to attend this.",
            "My vehicle has been in an accident. Please call the nearest police station to attend this"
        ],
        voiceO:[
            
        ],
        phase:false,
        emoji:"",
        interaction:true,
        do:function(){
            window.open('tel:01734007734');
            return "Calling XYZ Police station"
        }
    },

    {
        voiceI:[
            "I am under-age and am being married. What should I do?",
            "I am under-age and am being married. What should I do"
        ],
        voiceO:[
            'You are being connected to the nearest police station'
        ],
        phase:false,
        emoji:"",
        interaction:false
    },
] 