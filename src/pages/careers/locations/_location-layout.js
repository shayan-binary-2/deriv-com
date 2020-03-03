import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { getPositionsByLocation } from '../_model-controller/_teams'
import { LinkList } from '../_layout-components/_link-list'
import { RoleBanner } from '../_layout-components/_banner'
import device from 'themes/device'
import { SectionContainer, Container, Flex } from 'components/containers'
import { Text, Header, Image, BackgroundImage } from 'components/elements'
import { LinkButton } from 'components/form'
import { localize } from 'components/localization'
import { toHashFormat } from 'common/utility'
import MapPin from 'images/svg/map.svg'

const Pin = styled(MapPin)`
    min-width: 24px;
    height: 24px;
    margin-right: 13px;
`
const StyledContainer = styled(Container)`
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
`

const StyledHeader = styled(Header)`
    font-size: var(--text-size-xl);
    margin-bottom: 2.4rem;
    color: var(--color-white);
`

const Subheadline = styled(Text)`
    font-size: var(--text-size-sm);
    color: var(--color-white);
    max-width: 58.8rem;
    margin-bottom: 4rem;
`

const query = graphql`
    query {
        cyberjaya: file(relativePath: { eq: "careers/cyberjaya.png" }) {
            ...backGroundBlur
        }
        dubai: file(relativePath: { eq: "careers/dubai.png" }) {
            ...backGroundBlur
        }
        labuan: file(relativePath: { eq: "careers/labuan.png" }) {
            ...backGroundBlur
        }
        malta: file(relativePath: { eq: "careers/malta.png" }) {
            ...backGroundBlur
        }
        asuncion: file(relativePath: { eq: "careers/asuncion.png" }) {
            ...backGroundBlur
        }
    }
`

const Hero = ({ display_name, name, description }) => {
    const hero_img = useStaticQuery(query)

    return (
        <BackgroundImage
            data={hero_img[name]}
            style={{
                height: '80rem',
                width: '100%',
            }}
            alt={display_name}
        >
            <StyledContainer>
                <StyledHeader as="h1">{display_name}</StyledHeader>
                <Subheadline>{description}</Subheadline>
                <LinkButton secondary to="/careers/jobs">
                    {localize('View open positions in')} {display_name}
                </LinkButton>
            </StyledContainer>
        </BackgroundImage>
    )
}

Hero.propTypes = {
    description: PropTypes.string,
    display_name: PropTypes.string,
    img: PropTypes.string,
    name: PropTypes.string,
}

const First = styled.div`
    margin-right: 0.8rem;
    width: 100%;
    max-width: 24.7rem;
`

const Second = styled.div`
    margin-left: 0.8rem;
    width: 100%;
    max-width: 24.7rem;
`

const Third = styled.div`
    width: 100%;
    max-width: 50.9rem;
    margin-top: 0.8rem;
`

const Fourth = styled.div`
    width: 100%;
    max-width: 51.4rem;
`

const FirstSection = styled(SectionContainer)`
    ${Header} {
        margin-bottom: 4rem;
    }
    ${Text} {
        max-width: 41.5rem;
        margin-right: 6.4rem;

        @media ${device.tablet} {
            margin-right: 0;
            margin-bottom: 2rem;
        }
    }
`
const ImageWrapper = styled.div`
    max-width: 53.9rem;
    width: 100%;
`

const LocationCard = styled.article`
    max-width: 99.6rem;
    margin: 0 auto;
    border-radius: 4px;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);
`

const CardText = styled(Text)`
    margin-top: 1.6rem;
    margin-bottom: 4rem;
`
export const LocationLayout = ({ location }) => {
    const { display_name, name } = location
    if (!display_name) return null
    const positions = getPositionsByLocation(name)
    const mapped_positions = positions
        ? positions.map(position => ({
              text: position.title,
              to: `careers/jobs/job#${toHashFormat(position.title)}`,
              middle_text: position.location,
          }))
        : []

    return (
        <>
            <Hero
                display_name={display_name}
                name={location.name}
                description={location.header_p}
                img={location.hero_img}
            />
            <Container direction="column">
                <FirstSection padding="12rem 0">
                    <Header align="center" as="h2" font_size={'var(--text-size-header-1)'}>
                        {localize('Living in {{location}}', { location: display_name })}
                    </Header>
                    <Flex tablet_direction="column">
                        <Text secondary>{location.first_p}</Text>
                        <ImageWrapper>
                            <Image
                                img_name={location.first_img}
                                alt={localize('Living in {{location}}', { location: display_name })}
                                width="100%"
                            />
                        </ImageWrapper>
                    </Flex>
                </FirstSection>
                <SectionContainer padding="0rem">
                    <Header
                        align="center"
                        as="h2"
                        font_size={'var(--text-size-header-1)'}
                        style={{ marginBottom: '8rem' }}
                    >
                        {localize('Our office')}
                    </Header>
                    <Flex jc="unset">
                        <Flex direction="column" mr="0.8rem" ai="flex-end">
                            <Flex mb="0.8rem" jc="flex-end">
                                <First>
                                    <Image img_name={location.grid_images[0]} width="100%" />
                                </First>
                                <Second>
                                    <Image img_name={location.grid_images[1]} width="100%" />
                                </Second>
                            </Flex>
                            <Third>
                                <Image img_name={location.grid_images[2]} width="100%" />
                            </Third>
                        </Flex>
                        <Flex ml="0.8rem" jc="unset">
                            <Fourth>
                                <Image img_name={location.grid_images[3]} width="100%" />
                            </Fourth>
                        </Flex>
                    </Flex>
                </SectionContainer>
                <SectionContainer padding="12rem 0">
                    <LocationCard>
                        <Flex jc="unset" tablet_direction="column">
                            <ImageWrapper>
                                <Image img_name={location.map} alt={localize('Map')} width="100%" />
                            </ImageWrapper>
                            <Flex p="6rem" direction="column" mw="44.4rem">
                                <div style={{ maxWidth: '32.4rem' }}>
                                    <Header as="h3">{localize('location')}</Header>
                                    <CardText>
                                        {localize(
                                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.',
                                        )}
                                    </CardText>
                                    <Flex ai="center" jc="unset">
                                        <Pin />
                                        <Text>{location.address}</Text>
                                    </Flex>
                                </div>
                            </Flex>
                        </Flex>
                    </LocationCard>
                </SectionContainer>
                <SectionContainer>
                    <Header
                        align="center"
                        as="h2"
                        font_size={'var(--text-size-header-1)'}
                        style={{ marginBottom: '8rem' }}
                    >
                        {localize('Open positions in {{location}}', { location: display_name })}
                    </Header>
                    <LinkList list_items={mapped_positions} />
                </SectionContainer>
            </Container>
            <RoleBanner />
        </>
    )
}

LocationLayout.propTypes = {
    location: PropTypes.object,
}