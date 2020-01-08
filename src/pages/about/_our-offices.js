import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'
import Map from 'images/svg/world-map.svg'
import React from 'react'
import styled from 'styled-components'
import device from 'themes/device'

const OfficeContainer = styled.section`
    width: 100%;
    padding: 8rem 22.2rem;
    margin: auto;
    background-color: var(--color-grey-8);

    @media ${device.desktop} {
        max-width: 1440px;
    }
`
const MapWrapper = styled.div`
    position: relative;
    width: fit-content;
    margin: 0 auto;

    @media ${device.laptop} {
        display: none;
    }
`
const StyledMap = styled(Map)`
    height: 100%;
    width: 100%;
`
const Pinpoint = styled.div`
    width: 1rem;
    height: 1rem;
    background-color: var(--color-blue);
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
    visibility: hidden;

    &:hover {
        ${Oval} {
            visibility: visible;
        }
    }
`

const Oval = styled.div`
    width: 1rem;
    height: 1rem;
    background-color: var(--color-red);
    box-shadow: 0 0 0 0.5rem rgba(255, 68, 79, 0.3);
    border-radius: 50%;
    position: absolute;
    visibility: visible;
    top: ${props => props.top};
    left: ${props => props.left};
`
const StyledHeader = styled(Header)`
    font-size: 3.6rem;
    margin-bottom: 4rem;
`
const NumberWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: nowrap;
    text-align: center;
    align-items: center;
    margin-top: 2.4rem;
`
const Number = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
`

export const OurOffices = () => {
    return (
        <OfficeContainer>
            <StyledHeader align="center">{localize('Our offices')}</StyledHeader>
            <MapWrapper>
                <StyledMap />

                <Pinpoint top="73%" left="26%">
                    <Oval top="94%" left="27%" />
                </Pinpoint>
                <Pinpoint top="30%" left="51%">
                    <Oval top="30%" left="51%" />
                </Pinpoint>
                <Pinpoint top="39%" left="64%">
                    <Oval top="39%" left="64%" />
                </Pinpoint>
                <Pinpoint top="55%" left="81%">
                    <Oval top="55%" left="81%" />
                </Pinpoint>
                <Pinpoint top="54%" left="86%">
                    <Oval top="54%" left="86%" />
                </Pinpoint>
            </MapWrapper>

            <NumberWrapper>
                <Number>
                    <Header align="center" as="h2">
                        250+
                    </Header>
                    <Text align="center">{localize('Team members')}</Text>
                </Number>
                <Number>
                    <Header align="center" as="h2">
                        20
                    </Header>
                    <Text align="center">{localize('Nationalites')}</Text>
                </Number>
                <Number>
                    <Header align="center" as="h2">
                        5
                    </Header>
                    <Text align="center">{localize('Corporate offices')}</Text>
                </Number>
                <Number>
                    <Header align="center" as="h2">
                        900+
                    </Header>
                    <Text align="center">{localize('Global customer base')}</Text>
                </Number>
            </NumberWrapper>
        </OfficeContainer>
    )
}