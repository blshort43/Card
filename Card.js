/**
 *
 * Card
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Card as RebassCard } from 'rebass';

const Card = ({ ...props }) => (
  <RebassCard
    {...props}
    bg={props.bg ? props.bg : 'paper'}
    boxShadow={props.boxShadow ? props.boxShadow : [1]}
    borderRadius={props.borderRadius ? props.borderRadius : [1]}
  >
    {props.children}
  </RebassCard>
);

Card.propTypes = { children: PropTypes.node.isRequired };

export default Card;
