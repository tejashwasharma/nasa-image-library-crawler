import React from 'react';
import { FlexContainer, Keyword, PreviewFooter } from '..';
import { Component, KeywordsProps } from '../index.types';

const Keywords: Component<KeywordsProps> = ({ keywords }: KeywordsProps) => (
    <React.Fragment>
        <PreviewFooter hideBorder={true}>
            {keywords?.length ? <span>Keywords: </span> : null}
        </PreviewFooter>
        <FlexContainer row>
            {keywords?.map((k: string, i: number) => (
                <Keyword key={i}>{k}</Keyword>
            ))}
        </FlexContainer>

    </React.Fragment>
)

export default Keywords;
