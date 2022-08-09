import { LoaderContainer, Spinner } from '..';
import { Component, Props } from '../index.types';

const Loader: Component<Props> = (props) => (
    <LoaderContainer>
        <Spinner />
    </LoaderContainer>
)

export default Loader;
