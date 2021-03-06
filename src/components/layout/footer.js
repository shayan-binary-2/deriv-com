// TODO: (discussion) make footer pure component, and move usage of footer to custom
import React from 'react'
import styled, { css } from 'styled-components'
import { Container, CssGrid, Show, Flex } from '../containers'
import { Text, StyledLink, Accordion, AccordionItem } from '../elements'
import { localize, Localize, LanguageSwitcher } from 'components/localization'
import { isProduction } from 'common/websocket/config'
import device from 'themes/device'
// Icons
import Logo from 'images/svg/deriv-footer.svg'
import Twitter from 'images/svg/footer-twitter.svg'
import Instagram from 'images/svg/footer-instagram.svg'
import Facebook from 'images/svg/footer-facebook.svg'
import Warning from 'images/svg/warning.svg'
import Copyright from 'images/svg/copyright.svg'

const DerivLogo = styled(Logo)`
    width: 14.5rem;

    @media ${device.tabletL} {
        width: 20.5rem;
    }
`
const StyledFooter = styled.footer`
    background-color: var(--color-grey-8);
    width: 100%;
    margin: 0 auto;
    border-top: 1px solid var(--color-red);

    ${Container} {
        min-width: 328px;
    }
`
const StyledGrid = styled(CssGrid)`
    margin: 4rem 0;
    grid-template-areas: 'info info info . . items items items items items items items';

    @media ${device.tabletL} {
        grid-template-columns: 1fr;
        grid-template-areas: 'info';
    }
`
const InfoSection = styled.div`
    grid-area: info;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;

    ${Text} {
        margin-top: 2.2rem;
        max-width: 28.2rem;

        @media ${device.tabletL} {
            font-size: var(--text-size-sm);
            max-width: unset;
        }
    }
`
const Items = styled.div`
    grid-area: items;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    @media ${device.tabletL} {
        display: none;
    }
`
const BlackNav = styled.section`
    background-color: var(--color-black);
    width: 100%;

    p {
        font-size: var(--text-size-xs);
        color: var(--color-white);
        display: flex;
        align-items: center;
        line-height: normal;
    }
    svg {
        margin-right: 0.8rem;
    }
`
const Col = styled.div`
    width: ${props => props.width};
    ${props => (props.margin_top ? 'margin-top: 3.9rem;' : '')}

    div {
        margin-top: 0.8rem;
    }
    div:first-child {
        margin: 0;
    }
    ul {
        max-width: 15.2rem;
        width: 98%;
    }
    @media ${device.tabletS} {
        width: 50%;
        margin-top: 3rem;

        :nth-child(-n + 2) {
            margin-top: 0;
        }
    }
`
const Title = styled(Text)`
    color: var(--color-black-6);
    font-weight: bold;
    letter-spacing: 0.2rem;
`
const Link = styled(StyledLink)`
    color: var(--color-black-3);
    margin-top: 0.8rem;
    font-size: 1.6rem;
    line-height: 1.5;
`
const Disclaimer = styled.section`
    background-color: var(--color-grey-8);

    ${Container} {
        border-top: 1px solid var(--color-red);

        @media ${device.tabletL} {
            border-top: unset;
        }
    }

    @media ${device.tabletL} {
        border-top: 1px solid var(--color-red);
        padding-top: 1.5rem;
    }
`
const StyledContainer = styled(Container)`
    padding: 1.6rem 0;
`
const Row = styled.div`
    margin-top: ${props => (props.mt ? props.mt : '0')};
    margin-bottom: ${props => (props.mb ? props.mb : '0')};
    width: 100%;
    align-items: center;
    display: ${props => (props.flex ? 'flex' : 'block')};
`
const StyledText = styled(Text)`
    text-align: justify;
    color: var(--color-black-3);

    @media ${device.tabletL} {
        text-align: left;
        font-size: var(--text-size-sm);
    }
`
const BoldSharedCss = css`
    font-weight: bold;
    color: var(--color-black-3);
    font-size: var(--text-size-s);

    @media ${device.tabletL} {
        font-size: var(--text-size-sm);
    }
`
const BoldLink = styled(StyledLink)`
    ${BoldSharedCss}
`
const Risk = styled(Text)`
    ${BoldSharedCss}
    margin-left: 0.9rem;
`
const StaticAsset = styled.a`
    font-weight: bold;
    color: var(--color-black-3);
    font-size: var(--text-size-s);
    text-decoration: none;

    :hover {
        text-decoration: underline;
    }

    @media ${device.tabletL} {
        font-size: var(--text-size-sm);
    }
`
const ExternalLink = styled.a`
    text-decoration: none;
`

const SocialWrapper = styled(Flex)`
    svg {
        width: 4.2rem;
        margin-right: 1rem;
    }
    ${Text} {
        margin-top: 0;
        letter-spacing: 2px;
        color: var(--color-black-6);
        margin-bottom: 0.8rem;

        @media ${device.tabletL} {
            margin-bottom: 1rem;
        }
    }
`
const SocialMedia = styled(Flex)`
    @media ${device.tabletL} {
        margin-top: 2rem;
        flex-direction: row;
    }
`
const MobileAccordion = styled.section`
    border-top: 1px solid var(--color-red);
    background-color: var(--color-grey-8);

    p {
        letter-spacing: 2px;
    }
`
const Item = styled.div`
    padding: 0 0 3rem 2rem;
    background-color: var(--color-grey-8);

    a {
        font-size: var(--text-size-sm);
    }
`
const MobileLanguageSwitcher = styled.div`
    margin-top: 0.8rem;
    
    > ul {
        top: 0;
        width: 80px;
    }
`
const mobile_accordion_header = {
    border: 'none',
    padding: '0 2rem',
    backgroundColor: 'var(--color-grey-8)',
    boxShadow: 'none'
}
const Footer = () => (
    <StyledFooter>
        <Container>
            <StyledGrid columns="repeat(12, 1fr)" columngap="2.4rem" rowgap="3.9rem">
                <InfoSection>
                    <DerivLogo />
                    <Text>
                        {localize(
                            'Deriv is a new trading platform created by the Binary Group, a multi-award winning pioneer in online trading.',
                        )}
                    </Text>
                    <SocialMedia mt='3.1rem' jc='flex-start' direction='column'>
                        <SocialWrapper mt='0.8rem' jc='space-between' direction='column'>
                            <div>
                                <Text>{localize('CONNECT WITH US')}</Text>
                            </div>
                            <div>
                                <ExternalLink
                                    href="https://www.facebook.com/derivdotcom/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Facebook />
                                </ExternalLink>
                                <ExternalLink
                                    href="https://www.instagram.com/derivdotcom/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Instagram />
                                </ExternalLink>
                                <ExternalLink
                                    href="https://twitter.com/derivdotcom"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Twitter />
                                </ExternalLink>
                            </div>
                        </SocialWrapper>
                        <div>
                            <Show.Mobile>
                                <MobileLanguageSwitcher>
                                    {!isProduction() && <LanguageSwitcher short_name='true' />}
                                </MobileLanguageSwitcher>
                            </Show.Mobile>
                        </div>
                    </SocialMedia>
                </InfoSection>
                <Items>
                    <Col width="23%">
                        <div>
                            <Title>{localize('TRADE')}</Title>
                        </div>
                        <div>
                            <Link to="/dtrader">{localize('DTrader')}</Link>
                        </div>
                        <div>
                            <Link to="/dbot">{localize('DBot')}</Link>
                        </div>
                        <div>
                            <Link to="/dmt5">{localize('DMT5')}</Link>
                        </div>
                    </Col>
                    <Col width="40%">
                        <div>
                            <Title>{localize('LEGAL')}</Title>
                        </div>
                        <div>
                            <Link to="/regulatory">{localize('Regulatory information')}</Link>
                        </div>
                        <div>
                            <Link to="/terms-and-conditions">
                                {localize('Terms and conditions')}
                            </Link>
                        </div>
                        <div>
                            <Link to="/responsible-trading">
                                {localize('Secure and responsible trading')}
                            </Link>
                        </div>
                    </Col>
                    <Col width="25%">
                        <div>
                            <Title>{localize('SUPPORT')}</Title>
                        </div>
                        <div>
                            <Link to="/help-centre">{localize('Help Centre')}</Link>
                        </div>
                        <div>
                            <Link to="/payment-methods">{localize('Payment methods')}</Link>
                        </div>
                        <div>
                            <Link to="/why-choose-us">{localize('Why choose us')}</Link>
                        </div>
                    </Col>
                    <Col margin_top width="23%">
                        <div>
                            <Title>{localize('COMPANY')}</Title>
                        </div>
                        <div>
                            <Link to="/about#story">{localize('Our story')}</Link>
                        </div>
                        <div>
                            <Link to="/about#leadership">{localize('Our leadership')}</Link>
                        </div>
                        <div>
                            <Link to="/contact-us">{localize('Contact us')}</Link>
                        </div>
                        <div>
                            <Link to="/careers">{localize('Careers')}</Link>
                        </div>
                    </Col>
                    <Col margin_top width="40%">
                        <div>
                            <Title>{localize('PARTNER WITH US')}</Title>
                        </div>
                        <div>
                            <Link to="/partners">{localize('Partner programmes')}</Link>
                        </div>
                    </Col>
                    <Col margin_top width="25%">
                        {!isProduction() && <LanguageSwitcher />}
                    </Col>
                </Items>
            </StyledGrid>
        </Container>
        <Show.Mobile>
            <MobileAccordion>
                <Accordion>
                    <AccordionItem header={localize('TRADE')} arrow_thin header_style={mobile_accordion_header}>
                        <Item>
                            <Link to="/dtrader">{localize('DTrader')}</Link>
                        </Item>
                        <Item>
                            <Link to="/dbot">{localize('DBot')}</Link>
                        </Item>
                        <Item>
                            <Link to="/dmt5">{localize('DMT5')}</Link>
                        </Item>
                    </AccordionItem>
                    <AccordionItem header={localize('LEGAL')} arrow_thin header_style={mobile_accordion_header}>
                        <Item>
                            <Link to="/regulatory">{localize('Regulatory information')}</Link>
                        </Item>
                        <Item>
                            <Link to="/terms-and-conditions">
                                {localize('Terms and conditions')}
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/responsible-trading">
                                {localize('Secure and responsible trading')}
                            </Link>
                        </Item>
                    </AccordionItem>
                    <AccordionItem header='SUPPORT' arrow_thin header_style={mobile_accordion_header}>
                        <Item>
                            <Link to="/help-centre">{localize('Help Centre')}</Link>
                        </Item>
                        <Item>
                            <Link to="/payment-methods">{localize('Payment methods')}</Link>
                        </Item>
                        <Item>
                            <Link to="/why-choose-us">{localize('Why choose us')}</Link>
                        </Item>
                    </AccordionItem>
                    <AccordionItem header='COMPANY' arrow_thin header_style={mobile_accordion_header}>
                        <Item>
                            <Link to="/about">{localize('About us')}</Link>
                        </Item>
                        <Item>
                            <Link to="/contact-us">{localize('Contact us')}</Link>
                        </Item>
                    </AccordionItem>
                    <AccordionItem header='PARTNER WITH US' arrow_thin header_style={mobile_accordion_header}>
                        <Item>
                            <Link to="/partners">{localize('Partner programmes')}</Link>
                        </Item>
                    </AccordionItem>
                </Accordion>
            </MobileAccordion>
        </Show.Mobile>
        <Disclaimer>
            <StyledContainer direction="column">
                <Row>
                    <StyledText>
                        <Localize
                            translate_text="In the EU, financial products are offered by Binary Investments (Europe) Ltd, W Business Centre, Level 3, Triq Dun Karm, Birkirkara, BKR 9033, Malta, regulated as a Category 3 Investment Services provider by the Malta Financial Services Authority (<0>view licence</0>)."
                            components={[
                                <StaticAsset
                                    key={0}
                                    target="_blank"
                                    href="/WS-Binary-Investments-Europe-Limited.pdf"
                                    rel="noopener noreferrer"
                                />,
                            ]}
                        />
                    </StyledText>
                    <StyledText>
                        <Localize
                            translate_text="Outside the EU, financial products are offered by Binary (SVG) Ltd, Hinds Building, Kingstown, St Vincent and the Grenadines; Binary (V) Ltd, Govant Building, Port Vila, P.O. Box 1276, Vanuatu, regulated by the Vanuatu Financial Services Commission (<0>view licence</0>); Binary (BVI) Ltd, Kingston Chambers, P.O. Box 173, Road Town, Tortola, British Virgin Islands, regulated by the British Virgin Islands Financial Services Commission (<1>view licence</1>); and Binary (FX) Ltd, Lot No. F16, First Floor, Paragon Labuan, Jalan Tun Mustapha, 87000 Labuan, Malaysia, regulated by the Labuan Financial Services Authority to carry on a money-broking business (<2>view licence</2>)."
                            components={[
                                <StaticAsset
                                    key={0}
                                    target="_blank"
                                    href="/Vanuatu-Financial-Services-Commission.pdf"
                                    rel="noopener noreferrer"
                                />,
                                <StaticAsset
                                    key={1}
                                    target="_blank"
                                    href="/BVI_license.pdf"
                                    rel="noopener noreferrer"
                                />,
                                <StaticAsset
                                    key={2}
                                    target="_blank"
                                    href="/Labuan-license.pdf"
                                    rel="noopener noreferrer"
                                />,
                            ]}
                        />
                    </StyledText>
                    <StyledText margin='1rem 0 0 0'>
                        {localize(
                            "This website's services are not made available in certain countries including the USA, Canada, Hong Kong, and Japan, or to persons below 18.",
                        )}
                    </StyledText>
                </Row>
                <Row mt="2.4rem" mb="0.8rem" flex>
                    <Warning />
                    <Risk>{localize('Risk warning')}</Risk>
                </Row>
                <Row>
                    <StyledText>
                        <Localize
                            translate_text="The financial products offered via this website include digitals, contracts for difference (CFDs) and other complex derivatives and financial products. Secure and responsible trading options may not be suitable for everyone. Trading CFDs carries a high level of risk since leverage can work both to your advantage and disadvantage. As a result, the products offered on this website may not be suitable for all investors because of the risk of losing all of your invested capital. You should never invest money that you cannot afford to lose, and never trade with borrowed money. Before trading in the complex financial products offered, please be sure to understand the risks involved and learn about <0>Secure and responsible trading.</0>"
                            components={[
                                <BoldLink key={0} target="_blank" to="/responsible-trading/" />,
                            ]}
                        />
                    </StyledText>
                </Row>
            </StyledContainer>
        </Disclaimer>
        <BlackNav>
            <StyledContainer justify="flex-start">
                <StyledText>
                    <Copyright width="1.6rem" />
                    {new Date().getUTCFullYear()} {localize('Deriv | All rights reserved')}
                </StyledText>
            </StyledContainer>
        </BlackNav>
    </StyledFooter>
)

export default Footer
