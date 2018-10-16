/* @flow */
import React from 'react';
import Link from './link';

type LinkType = {
    url: string,
    text: string
};

type Props = {
    description: string,
    links: Array<LinkType>
  };

function DescriptionWithLinks(props: Props) {
    const token = '###';
    let description = props.description;
    // we sort the links by their length to prevent a shorter url from the same domain to be matched first
    // we don't want https://www.bbc.co.uk to be matched for https://www.bbc.co.uk/weather
    const links = props.links.sort((a, b) => b.url.length - a.url.length);
    links.forEach((link, index) => {
        description = description.replace(new RegExp(link.url, 'g'), `${token}${index}-link${token}`);
    });
    const chunks = description.split(token).map((chunk, index) => {
        const link = chunk.indexOf('-link') > -1 && links[parseInt(chunk, 10)];
        if (link) {
            return <Link key={`url-${index}`} url={link.url}>{link.text}</Link>;
        } else {
            return chunk;
        }
    });
    return <div>{chunks}</div>;
}

DescriptionWithLinks.defaultProps = {
    links: []
};

export default DescriptionWithLinks;
