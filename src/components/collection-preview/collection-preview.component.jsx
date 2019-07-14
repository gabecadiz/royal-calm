import React from 'react';

import CollectionItem from '../collection-item/collection-item.component'

import {
  CollectionPreviewContainer,
  CollectionTitleContainer,
  CollectionTitle,
  CollectionLink,
  CollectionPreviewFilteredContainer
} from './collection-preview.styles'

const CollectionPreview = ({ title, items, routeName }) => {
  return (
    <CollectionPreviewContainer>
      <CollectionTitleContainer>
        <CollectionTitle>{title.toUpperCase()}</CollectionTitle>
        <CollectionLink to={`/shop/${routeName}`}> View Full Collection </CollectionLink>
      </CollectionTitleContainer>
      <CollectionPreviewFilteredContainer>
        {
          items
            .filter((item, idx) => idx < 4)
            .map((item) => {
              return (
                <CollectionItem key={item.id} item={item} />
              )
            })
        }
      </CollectionPreviewFilteredContainer>
    </CollectionPreviewContainer>
  )
}

export default CollectionPreview;