"use client"
import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const faq = () => {
    const [expandedPanel, setExpandedPanel] = useState<string | false>("panel1");

    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setExpandedPanel(isExpanded ? panel : false);
    };

    const expandIcon = (panel: string) => (
        expandedPanel === panel ? (
            <span style={{ color: "white", fontSize: "24px" }}>-</span>
        ) : (
            <span style={{ color: "white", fontSize: "24px" }}>+</span>
        )
    );

    return (
        <>
            <h1 className="text-3xl font-bold text-white text-center mb-6 mt-10">Frequently Asked Questions</h1>
            <div className="max-w-3xl mx-auto bg-[#17112A] rounded-2xl p-6 shadow-xl">

                <Accordion expanded={expandedPanel === "panel1"} onChange={handleChange("panel1")} className='bg-[#17112A] p-6'>
                    <AccordionSummary
                        expandIcon={expandIcon("panel1")}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className='bg-[#17112A] rounded-2xl'
                    >
                        <Typography variant="body1" className="text-white">What is BotWot?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2" className="text-gray-600">
                            BotWot is a no-code chatbot platform that empowers businesses to build and deploy custom AI chatbots in minutes, without any coding experience.
                        </Typography>
                    </AccordionDetails>
                    <hr></hr>
                </Accordion>
                <Accordion expanded={expandedPanel === "panel2"} onChange={handleChange("panel2")} className='bg-[#17112A] p-6'>
                    <AccordionSummary
                        expandIcon={expandIcon("panel2")}
                        aria-controls="panel2-content"
                        id="panel2-header"
                        className='bg-[#17112A] rounded-2xl'
                    >
                        <Typography variant="body1" className="text-white">How does BotWot work?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2" className="text-gray-600">
                            BotWot provides a user-friendly, drag-and-drop interface for creating conversation flows, adding text messages, buttons, and media elements to design chatbot responses and interactions.
                        </Typography>
                    </AccordionDetails>
                    <hr></hr>
                </Accordion>
                <Accordion expanded={expandedPanel === "panel3"} onChange={handleChange("panel3")} className='bg-[#17112A] p-6'>
                    <AccordionSummary
                        expandIcon={expandIcon("panel3")}
                        aria-controls="panel3-content"
                        id="panel3-header"
                        className='bg-[#17112A] rounded-2xl'
                    >
                        <Typography variant="body1" className="text-white">Do I need any technical knowledge to use BotWot?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2" className="text-gray-600">
                            No technical knowledge is required. BotWot is designed for users of all technical backgrounds, making it easy to build chatbots quickly and efficiently.
                        </Typography>
                    </AccordionDetails>
                    <hr></hr>
                </Accordion>
                <Accordion expanded={expandedPanel === "panel4"} onChange={handleChange("panel4")} className='bg-[#17112A] p-6'>
                    <AccordionSummary
                        expandIcon={expandIcon("panel4")}
                        aria-controls="panel4-content"
                        id="panel4-header"
                        className='bg-[#17112A] rounded-2xl'
                    >
                        <Typography variant="body1" className="text-white">How much does BotWot cost?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2" className="text-gray-600">
                            BotWot offers various pricing plans to suit different business needs. For detailed pricing information, please visit our website or contact our sales team for a customized quote.

                        </Typography>
                    </AccordionDetails>
                    <hr></hr>
                </Accordion>
                <Accordion expanded={expandedPanel === "panel5"} onChange={handleChange("panel5")} className='bg-[#17112A] p-6'>
                    <AccordionSummary
                        expandIcon={expandIcon("panel5")}
                        aria-controls="panel5-content"
                        id="panel5-header"
                        className='bg-[#17112A] rounded-2xl'
                    >
                        <Typography variant="body1" className="text-white">Who can benefit from BotWot?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2" className="text-gray-600">
                            Businesses of all sizes and industries, including retail, healthcare, and financial services, can leverage BotWot to enhance customer service, boost sales, and create engaging customer experiences.
                        </Typography>
                    </AccordionDetails>
                    <hr></hr>
                </Accordion>
                <Accordion expanded={expandedPanel === "panel6"} onChange={handleChange("panel6")} className='bg-[#17112A] p-6'>
                    <AccordionSummary
                        expandIcon={expandIcon("panel6")}
                        aria-controls="panel6-content"
                        id="panel5-header"
                        className='bg-[#17112A] rounded-2xl'
                    >
                        <Typography variant="body1" className="text-white">What features does BotWot offer for building chatbots
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2" className="text-gray-600">
                            Drag-and-drop interface for creating conversation flows.
                            Pre-built templates for common customer service scenarios.
                            Options to add text messages, buttons, menus, and images.
                            Integration with external platforms (based on your plan).
                            Analytics dashboard to track chatbot performance.


                        </Typography>
                    </AccordionDetails>
                    <hr></hr>
                </Accordion>
               
            </div>
        </>
    )
}

export default faq
