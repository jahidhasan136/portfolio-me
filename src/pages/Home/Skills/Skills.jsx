import html from './images/html.svg'
import css from './images/css.svg'
import tailwindcss from './images/tailwindcss.svg'
import bootstrap from './images/bootstrap.svg'
import js from './images/js.svg'
import react from './images/react.svg'
import next from './images/next.svg'
import redux from './images/redux.svg'
import node from './images/node.svg'
import mongodb from './images/mongodb.svg'
import express from './images/express.svg'
import figma from './images/figma.svg'
import github from './images/github.svg'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const Skills = () => {
    return (
        <div className="container mt-[120px] p-5">
            <h2 className="text-[45px] font-bold italic">Professional Skills</h2>
            <div className='mt-10 flex justify-between'>
                <div className='bg-[#222222] w-full flex justify-center py-5 rounded-md'>
                    <div>
                        <h3 className='text-[30px] font-medium mb-10 text-[#a7a7a7]'>Front-End Technologies</h3>
                        <div className='grid grid-cols-3 gap-10
            '>
                            <div style={{ width: 100 }}>
                                <CircularProgressbarWithChildren value={96}>
                                    <img style={{ width: 30, marginBottom: 5 }} src={html} alt="html" />
                                    <div style={{ fontSize: 12 }}>
                                        <strong>96%</strong>
                                    </div>
                                </CircularProgressbarWithChildren>
                            </div>
                            <div style={{ width: 100 }}>
                                <CircularProgressbarWithChildren value={85}>
                                    <img style={{ width: 30, marginBottom: 5 }} src={css} alt="html" />
                                    <div style={{ fontSize: 12 }}>
                                        <strong>85%</strong>
                                    </div>
                                </CircularProgressbarWithChildren>
                            </div>
                            <div style={{ width: 100 }}>
                                <CircularProgressbarWithChildren value={90}>
                                    <img style={{ width: 30, marginBottom: 5 }} src={tailwindcss} alt="html" />
                                    <div style={{ fontSize: 12 }}>
                                        <strong>90%</strong>
                                    </div>
                                </CircularProgressbarWithChildren>
                            </div>
                            <div style={{ width: 100 }}>
                                <CircularProgressbarWithChildren value={80}>
                                    <img style={{ width: 30, marginBottom: 5 }} src={bootstrap} alt="html" />
                                    <div style={{ fontSize: 12 }}>
                                        <strong>80%</strong>
                                    </div>
                                </CircularProgressbarWithChildren>
                            </div>
                            <div style={{ width: 100 }}>
                                <CircularProgressbarWithChildren value={90}>
                                    <img style={{ width: 30, marginBottom: 5 }} src={js} alt="html" />
                                    <div style={{ fontSize: 12 }}>
                                        <strong>90%</strong>
                                    </div>
                                </CircularProgressbarWithChildren>
                            </div>
                            <div style={{ width: 100 }}>
                                <CircularProgressbarWithChildren value={95}>
                                    <img style={{ width: 30, marginBottom: 5 }} src={react} alt="html" />
                                    <div style={{ fontSize: 12 }}>
                                        <strong>95%</strong>
                                    </div>
                                </CircularProgressbarWithChildren>
                            </div>
                            <div style={{ width: 100 }}>
                                <CircularProgressbarWithChildren value={55}>
                                    <img style={{ width: 30, marginBottom: 5 }} src={next} alt="html" />
                                    <div style={{ fontSize: 12 }}>
                                        <strong>55%</strong>
                                    </div>
                                </CircularProgressbarWithChildren>
                            </div>
                            <div style={{ width: 100 }}>
                                <CircularProgressbarWithChildren value={55}>
                                    <img style={{ width: 30, marginBottom: 5 }} src={redux} alt="html" />
                                    <div style={{ fontSize: 12 }}>
                                        <strong>55%</strong>
                                    </div>
                                </CircularProgressbarWithChildren>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border border-[#000]'></div>
                <div className='bg-[#222222] w-full flex justify-center py-5 rounded-md'>
                    <div>
                        <h3 className='text-[30px] font-medium mb-10 text-[#a7a7a7]'>Soft Skills</h3>
                        <div className='grid grid-cols-2 gap-10'>
                            <div style={{ width: 100 }}>
                                <CircularProgressbarWithChildren value={66}>
                                    <div style={{ fontSize: 12 }}>
                                        <strong>Cretivity</strong>
                                    </div>
                                </CircularProgressbarWithChildren>
                            </div>
                            <div style={{ width: 100 }}>
                                <CircularProgressbarWithChildren value={66}>
                                    <div style={{ fontSize: 12 }}>
                                        <strong>Teamwork</strong>
                                    </div>
                                </CircularProgressbarWithChildren>
                            </div>
                            <div style={{ width: 100 }}>
                                <CircularProgressbarWithChildren value={66}>
                                    <div style={{ fontSize: 12 }}>
                                        <strong>Interpersonal</strong>
                                    </div>
                                </CircularProgressbarWithChildren>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border border-[#000]'></div>
            <div className='mt-0'>
                <div className='flex justify-between mt-10'>
                    <div className='bg-[#222222] w-full flex justify-center py-5 rounded-md'>
                        <div>
                            <h3 className='text-[30px] font-medium mb-10 text-[#a7a7a7]'>Back-End Technologies</h3>
                            <div className='grid grid-cols-3 gap-10'>
                                <div style={{ width: 100 }}>
                                    <CircularProgressbarWithChildren value={94}>
                                        <img style={{ width: 30, marginBottom: 5 }} src={node} alt="html" />
                                        <div style={{ fontSize: 12 }}>
                                            <strong>94%</strong>
                                        </div>
                                    </CircularProgressbarWithChildren>
                                </div>
                                <div style={{ width: 100 }}>
                                    <CircularProgressbarWithChildren value={90}>
                                        <img style={{ width: 30, marginBottom: 5 }} src={mongodb} alt="html" />
                                        <div style={{ fontSize: 12 }}>
                                            <strong>90%</strong>
                                        </div>
                                    </CircularProgressbarWithChildren>
                                </div>
                                <div style={{ width: 100 }}>
                                    <CircularProgressbarWithChildren value={86}>
                                        <img style={{ width: 30, marginBottom: 5 }} src={express} alt="html" />
                                        <div style={{ fontSize: 12 }}>
                                            <strong>86%</strong>
                                        </div>
                                    </CircularProgressbarWithChildren>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border border-[#000]'></div>
                    <div className='bg-[#222222] w-full flex justify-center py-5 rounded-md'>
                        <div>
                            <h3 className='text-[30px] font-medium mb-10 text-[#a7a7a7]'>Tools</h3>
                            <div className='flex gap-10'>
                                <div style={{ width: 100 }}>
                                    <CircularProgressbarWithChildren value={66}>
                                        <img style={{ width: 30, marginBottom: 5 }} src={figma} alt="html" />
                                        <div style={{ fontSize: 12 }}>
                                            <strong>66%</strong>
                                        </div>
                                    </CircularProgressbarWithChildren>
                                </div>
                                <div style={{ width: 100 }}>
                                    <CircularProgressbarWithChildren value={66}>
                                        <img style={{ width: 30, marginBottom: 5 }} src={github} alt="html" />
                                        <div style={{ fontSize: 12 }}>
                                            <strong>66%</strong>
                                        </div>
                                    </CircularProgressbarWithChildren>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;