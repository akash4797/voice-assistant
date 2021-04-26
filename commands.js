const defaultCommand={
    default:"Sorry could not understand...Because my creator did not taught me much, such a lazy person",
    emoji:"😅"
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
            "who are you"
        ],
        voiceO:[
            'I am nobody, but a talking machine! , I do not know why I was created?'
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
            'Sorry, I do not know you and do not want to know that also...but still tell me your name?'
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
            'what is the time'
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
]