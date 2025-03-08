import type { BoxProps, InputElementProps } from '@chakra-ui/react';
import { Group, InputElement } from '@chakra-ui/react';
import * as React from 'react';

export interface InputGroupProps extends BoxProps {
  endElementProps?: InputElementProps;
  endElement?: React.ReactNode;
  children: React.ReactElement<InputElementProps>;
  endOffset?: InputElementProps['paddingEnd'];
}

const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(function InputGroup(props, ref) {
  const { endElement, endElementProps, children, endOffset = '6px', ...rest } = props;

  const child = React.Children.only<React.ReactElement<InputElementProps>>(children);

  return (
    <Group ref={ref} {...rest}>
      {React.cloneElement(child, {
        ...(endElement && { pe: `calc(var(--input-height) - ${endOffset})` }),
        ...children.props,
      })}

      {endElement && (
        <InputElement placement="end" {...endElementProps}>
          {endElement}
        </InputElement>
      )}
    </Group>
  );
});

export default InputGroup;
