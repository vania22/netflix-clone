import React, { Fragment } from 'react';
import data from '../fixtures/faqs.json';
import Accordion from '../components/accordion/Accordion';

const AccordionContainer = () => {
    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {data.map((item) => (
                <Fragment key={item.id}>
                    <Accordion.Item>
                        <Accordion.Header>{item.header}</Accordion.Header>
                        <Accordion.Body>{item.body}</Accordion.Body>
                    </Accordion.Item>
                </Fragment>
            ))}
        </Accordion>
    );
};

export default AccordionContainer;
