/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import {
  EuiButton,
  EuiOverlayMask,
  EuiModal,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiModalBody,
  EuiCallOut,
  EuiSpacer,
  EuiCodeBlock,
  EuiModalFooter,
  EuiAccordion,
} from '@elastic/eui';
import React, { useCallback } from 'react';
import styled from 'styled-components';

import { AppToast } from '.';
import * as i18n from './translations';

interface FullErrorProps {
  isShowing: boolean;
  toast: AppToast;
  toggle: (toast: AppToast) => void;
}

const ModalAllErrorsComponent: React.FC<FullErrorProps> = ({ isShowing, toast, toggle }) => {
  const handleClose = useCallback(() => toggle(toast), [toggle, toast]);

  if (!isShowing || toast == null) return null;

  return (
    <EuiOverlayMask>
      <EuiModal onClose={handleClose}>
        <EuiModalHeader>
          <EuiModalHeaderTitle>{i18n.TITLE_ERROR_MODAL}</EuiModalHeaderTitle>
        </EuiModalHeader>

        <EuiModalBody>
          <EuiCallOut title={toast.title} color="danger" size="s" iconType="alert" />
          <EuiSpacer size="s" />
          {toast.errors != null &&
            toast.errors.map((error, index) => (
              <EuiAccordion
                key={`${toast.id}-${index}`}
                id="accordion1"
                initialIsOpen={index === 0 ? true : false}
                buttonContent={error.length > 100 ? `${error.substring(0, 100)} ...` : error}
                data-test-subj="modal-all-errors-accordion"
              >
                <MyEuiCodeBlock>{error}</MyEuiCodeBlock>
              </EuiAccordion>
            ))}
        </EuiModalBody>

        <EuiModalFooter>
          <EuiButton onClick={handleClose} fill data-test-subj="modal-all-errors-close">
            {i18n.CLOSE_ERROR_MODAL}
          </EuiButton>
        </EuiModalFooter>
      </EuiModal>
    </EuiOverlayMask>
  );
};

export const ModalAllErrors = React.memo(ModalAllErrorsComponent);

const MyEuiCodeBlock = styled(EuiCodeBlock)`
  margin-top: 4px;
`;

MyEuiCodeBlock.displayName = 'MyEuiCodeBlock';
