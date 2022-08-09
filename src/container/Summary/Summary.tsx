import { AxiosError, AxiosResponse } from 'axios';
import moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../api';
import { Back, FlexContainer, Description, PreviewFooter, SummaryPreview, Title, HeaderTitle } from '../../component';
import Gallery from '../../component/Gallery/Gallery';
import Keywords from '../../component/Keywords/Keywords';
import Loader from '../../component/Loader/Loader';
import { updateGallery } from '../../redux/actions/actions';
import { useTypedDispatch, useTypedSelector } from '../../redux/store';

const Summary: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const { selectedResult, gallery } = useTypedSelector((state) => state.app);
    const history = useNavigate();
    const dispatch = useTypedDispatch();
    const cover = gallery?.length ? gallery[0] : selectedResult?.links?.find(i => i.rel === 'preview')?.href;
    const itemData = selectedResult?.data[0];

    const getGallery = useCallback(() => {
        setLoading(true);
        api({ method: 'get', rootUrl: selectedResult?.href, url: '' })
            .then(({ data }: AxiosResponse) => dispatch(updateGallery(data)))
            .catch((err: AxiosError) => {
                // handle error
                console.log(err);
            })
            .finally(() => setLoading(false));
    }, [dispatch, selectedResult?.href])

    useEffect(() => {
        getGallery();
    }, [getGallery, selectedResult])

    return (
        <React.Fragment>
            <FlexContainer bgColor='#00055e'>
                <Back onClick={() => history(-1)}>
                    <svg viewBox="0 0 512 512"><polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 " /></svg>
                </Back>
                <HeaderTitle>Interstellar Crawler</HeaderTitle>
            </FlexContainer>
            {loading || !selectedResult ? (
                <Loader />
            ) : (
                <React.Fragment>
                    <SummaryPreview bgUrl={cover} />
                    <Title data-testid="item-title">{itemData?.title}</Title>
                    <PreviewFooter hide={!itemData?.photographer && !itemData?.location && !itemData?.date_created}>
                        {itemData?.photographer ? <span><strong>Photographer:</strong> {itemData?.photographer}</span> : null}
                        {itemData?.photographer && itemData?.location ? <br /> : null}
                        {itemData?.location ? <span><strong>Location:</strong> {itemData?.location}</span> : null}
                        {((itemData?.date_created && itemData?.location) || (itemData?.date_created && itemData?.photographer)) ? <br /> : null}
                        {itemData?.date_created ? <span>Captured @ {moment(itemData?.date_created).format("MM-DD-YYYY")}</span> : null}
                    </PreviewFooter>
                    <Keywords keywords={itemData?.keywords} />
                    <Description><strong>Description: </strong>{itemData?.description}</Description>
                    <Gallery gallery={gallery} />
                </React.Fragment>
            )}
        </React.Fragment >
    )
}

export default Summary;
