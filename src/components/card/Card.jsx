import React, { createContext, useState, useContext } from 'react';
import {
    Container,
    Title,
    Subtitle,
    Text,
    Group,
    Entities,
    Image,
    Meta,
    Feature,
    FeatureTitle,
    FeatureText,
    FeatureClose,
    Maturity,
    Content,
    Item,
} from './styles/card';

export const FeatureContext = createContext();

const Card = ({ children, ...restProps }) => {
    const [showFeature, setShowFeature] = useState(false);
    const [itemFeature, setItemFeature] = useState({});

    return (
        <FeatureContext.Provider
            value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
        >
            <Container {...restProps}>{children}</Container>
        </FeatureContext.Provider>
    );
};

Card.Group = ({ children, ...restProps }) => (
    <Group {...restProps}>{children}</Group>
);

Card.Title = ({ children, ...restProps }) => (
    <Title {...restProps}>{children}</Title>
);

Card.Subtitle = ({ children, ...restProps }) => (
    <Subtitle {...restProps}>{children}</Subtitle>
);

Card.Text = ({ children, ...restProps }) => (
    <Text {...restProps}>{children}</Text>
);

Card.Meta = ({ children, ...restProps }) => (
    <Meta {...restProps}>{children}</Meta>
);

Card.Item = function CardItem({ item, children, ...restProps }) {
    const { setShowFeature, setItemFeature } = useContext(FeatureContext);

    return (
        <Item
            onClick={() => {
                setItemFeature(item);
                setShowFeature(true);
            }}
            {...restProps}
        >
            {children}
        </Item>
    );
};

Card.Image = ({ src, ...restProps }) => <Image src={src} {...restProps} />;

Card.Entities = ({ children, ...restProps }) => (
    <Entities {...restProps}>{children}</Entities>
);

Card.Feature = function CardFeature({ children, category, ...restProps }) {
    const { showFeature, itemFeature, setShowFeature } = useContext(
        FeatureContext,
    );

    return showFeature ? (
        <Feature
            src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
            {...restProps}
        >
            <Content>
                <FeatureTitle>{itemFeature.title}</FeatureTitle>
                <Group margin="30px 0" flexDirection="row" alignItems="center">
                    <Maturity rating={itemFeature.maturity}>
                        {itemFeature.maturity < 12
                            ? 'PG'
                            : itemFeature.maturity}
                    </Maturity>
                    <FeatureText fontWeight="bold">
                        {itemFeature.genre.charAt(0).toUpperCase() +
                            itemFeature.genre.slice(1)}
                    </FeatureText>
                </Group>
                <FeatureText>{itemFeature.description}</FeatureText>
                <FeatureClose onClick={() => setShowFeature(false)}>
                    <img src="/images/icons/close.png" />
                </FeatureClose>
                {children}
            </Content>
        </Feature>
    ) : null;
};

export default Card;
