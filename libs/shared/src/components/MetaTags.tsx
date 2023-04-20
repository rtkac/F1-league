import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

export const MetaTags = ({ children, title }: MetaTagsProps) => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{`${title}${t('meta.title.suffix')}`}</title>
      </Helmet>
      {children}
    </>
  );
};

interface MetaTagsProps {
  children: JSX.Element;
  title: string;
}
