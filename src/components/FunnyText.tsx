"use client";

import {useEffect, useState} from "react";

export default function FunnyText() {
    // Show some random funny text (from chat-gpt, maybe using some api in the future xd)
    const funnyWeatherTexts = [
        "Weather forecast for today: You will find yourself in a weather situation. Dress accordingly.",
        "Weather update: It's raining cats and dogs! Better grab an umbrella and watch out for flying fur.",
        "The weather is like a box of chocolates; you never know what you're gonna get.",
        "Weather report: Clouds are like teenagers. When they go away, it's a beautiful day!",
        "Is it just me, or is the weather flirting with us? Wink, wink!",
        "Good news! The weather is warming up. Time to break out the shorts and embrace your paleness.",
        "Current weather status: Cloudy with a chance of meatballs. Keep your forks ready!",
        "Weather update: There's a 50% chance it's already raining. But don't worry, you're 100% awesome!",
        "Is it hot in here, or is it just the weather trying to impress us?",
        "Weather advisory: You might experience occasional sunshine mixed with a lot of shade.",
        "Attention! The weather is having a party, and you're invited to dance in the rain.",
        "Weather forecast: Expect a sprinkle of rain and a chance of spontaneous laughter.",
        "Today's weather brought to you by your local meteorologist and a magic eight ball.",
        "The weather is like a toddler - unpredictable, sometimes adorable, but can throw tantrums.",
        "Current weather status: Sunny with a chance of getting caught in a random dance party.",
        "Weather update: Grab a jacket; it's cold enough to freeze a snowman's smile!",
        "Newsflash: The weather has a secret admirer. It's sending extra sunshine your way!",
        "Weather forecast: Expect moments of stormy laughter followed by clear skies of contentment.",
        "It's not just weather; it's an opportunity to talk about the weather with strangers.",
        "Warning: The weather is having a bad hair day. But don't worry; you're looking fabulous!"
    ];

    // Using state to avoid NextJS "Warning: Text content did not match..."
    const [text, setText] = useState<string>("");
    useEffect(() => {
        setText(funnyWeatherTexts[Math.floor(Math.random() * funnyWeatherTexts.length)])
    }, []);

    return (
        <div className="text-center text-xl">
            <div className="mb-1 text-gray-500 md:text-xl">{text}</div>
            <div className="my-4 text-gray-600 md:text-2xl">
                Wondering about the weather? Enter a city or location name to get the latest forecast!
            </div>
        </div>
    );
}
