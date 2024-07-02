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
                    <Typography variant="body1" className="text-white">What is Webflow and why is it the best website builder?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body2" className="text-gray-600">
                        Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.
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
                    <Typography variant="body1" className="text-white">What is your favorite template from BRIX Templates?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body2" className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
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
                    <Typography variant="body1" className="text-white">How do you clone a template from the Showcase?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body2" className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
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
                    <Typography variant="body1" className="text-white">Why is BRIX Templates the best Webflow agency?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body2" className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
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
                    <Typography variant="body1" className="text-white">When was Webflow officially launched?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body2" className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
                <hr></hr>
            </Accordion>
        </div>
        </>
    )
}

export default faq
