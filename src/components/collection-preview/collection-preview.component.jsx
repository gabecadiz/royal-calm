import React from 'react';

import CollectionItem from '../collection-item/collection-item.component'

import {
  CollectionPreviewContainer,
  CollectionTitle,
  CollectionPreviewFilteredContainer
} from './collection-preview.styles'

const CollectionPreview = ({ title, items }) => {
  return (
    <CollectionPreviewContainer>
      <CollectionTitle>{title.toUpperCase()}</CollectionTitle>
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