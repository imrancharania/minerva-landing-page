"use client"

import { Check } from "lucide-react";
import { EmailIcon, EmailShareButton, FacebookMessengerIcon, FacebookMessengerShareButton, FacebookShareButton, LinkedinShareButton, PinterestIcon, PinterestShareButton, RedditIcon, RedditShareButton, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from "next-share";
import Icon from "../ui/components/Icon";


export default function SuccessRoute() {
    const FacebookIcon = Icon({
        color: "#3b5998",
        name: "facebook",
        path: "M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z",
    });

    const LinkedinIcon = Icon({
        color: "#007fb1",
        name: "linkedin",
        path: "M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z",
    });

    const TwitterIcon = Icon({
        color: "#000000",
        name: "twitter",
        path: "M 41.116 18.375 h 4.962 l -10.8405 12.39 l 12.753 16.86 H 38.005 l -7.821 -10.2255 L 21.235 47.625 H 16.27 l 11.595 -13.2525 L 15.631 18.375 H 25.87 l 7.0695 9.3465 z m -1.7415 26.28 h 2.7495 L 24.376 21.189 H 21.4255 z",
    });

    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col items-center justify-center rounded-md p-8 text-center animate-in fade-in-50">
                <div className="flex size-20 items-center justify-center rounded-full bg-green-500/10">
                    <Check className="size-10 text-green-500" />
                </div>
                <h1 className="mt-6 text-2xl font-semibold">Thank you!</h1>
                <p className="mt-2 mb-8 text-center text-sm text-muted-foreground">We&apos;ll let you know when it&apos;s ready.</p>
                <h2 className="font-semibold">Share</h2>
                <div className="flex mt-4 gap-x-2">
                    <EmailShareButton
                        url={"https://github.com/next-share"}
                        subject={"Your healthiest skin ever"}
                        body="Find the best products from top brands and create the most effective skincare routine that works for your skin's unique needs with the help of an AI-powered skincare advisor.">
                        <EmailIcon size={32} round />
                    </EmailShareButton>
                    <FacebookShareButton
                        url={"https://github.com/next-share"}
                        quote={"Your healthiest skin ever"}
                        hashtag={"#nextshare"}>
                        <FacebookIcon size={32} round />
                    </FacebookShareButton>
                    <FacebookMessengerShareButton
                        url={"https://github.com/next-share"}
                        appId={""}>
                        <FacebookMessengerIcon size={32} round />
                    </FacebookMessengerShareButton>
                    <LinkedinShareButton url={"https://github.com/next-share"}>
                        <LinkedinIcon size={32} round />
                    </LinkedinShareButton>
                    <PinterestShareButton
                        url={"https://github.com/next-share"}
                        media={"Find the best products from top brands and create the most effective skincare routine that works for your skin&apos;s unique needs with the help of an AI-powered skincare advisor."}
                    >
                        <PinterestIcon size={32} round />
                    </PinterestShareButton>
                    <RedditShareButton
                        url={"https://github.com/next-share"}
                        title={"Your healthiest skin ever"}
                    >
                        <RedditIcon size={32} round />
                    </RedditShareButton>
                    <TwitterShareButton
                        url={"https://github.com/next-share"}
                        title={"Your healthiest skin ever"}
                    >
                        <TwitterIcon size={32} round />
                    </TwitterShareButton>
                    <WhatsappShareButton
                        url={"https://github.com/next-share"}
                        title={"Your healthiest skin ever"}
                        separator=":: "
                    >
                        <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                </div>
            </div>
        </section>
    );
}