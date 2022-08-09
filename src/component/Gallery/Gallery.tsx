import React from 'react';
import { Container, Image, PreviewFooter } from '..';
import { GalleryProps } from '../index.types';

const Gallery: React.FC<GalleryProps> = ({ gallery }) => (
    <React.Fragment>
        <PreviewFooter>Gallery: </PreviewFooter>
        <Container alignCenter>
            {gallery?.filter((item: string) => !item.includes('.json')).map((item: string, idx: number) => (
                <Container inline imgContainer key={idx} sm={true}>
                    <Image bgUrl={item} />
                </Container>
            ))}
        </Container>
    </React.Fragment>
)


export default Gallery;
