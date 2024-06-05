'use strict';
(self.webpackChunkmercredi_patrick_ui_garden =
  self.webpackChunkmercredi_patrick_ui_garden || []).push([
  [391],
  {
    './src/components/RadioButton/RadioButton.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => RadioButton_stories,
        });
      var _templateObject,
        _templateObject2,
        react = __webpack_require__('./node_modules/react/index.js'),
        taggedTemplateLiteral = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
        ),
        styled_components_browser_esm = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      const StyledLabel = styled_components_browser_esm.Ay.label(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              '\n    margin: 5px;\n    font-size: 16px;\n',
            ]))
        ),
        StyledRadio = styled_components_browser_esm.Ay.input.attrs({
          type: 'radio',
        })(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              '\n    margin-right: 5px;\n',
            ]))
        ),
        RadioButton = (_ref) => {
          let { label, name, checked, onChange, value, disabled } = _ref;
          return (0, jsx_runtime.jsxs)(StyledLabel, {
            children: [
              (0, jsx_runtime.jsx)(StyledRadio, {
                name,
                checked,
                onChange,
                value,
                disabled,
              }),
              label,
            ],
          });
        },
        RadioButton_RadioButton = RadioButton;
      RadioButton.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'RadioButton',
        props: {
          label: { required: !0, tsType: { name: 'string' }, description: '' },
          name: { required: !0, tsType: { name: 'string' }, description: '' },
          checked: {
            required: !0,
            tsType: { name: 'boolean' },
            description: '',
          },
          onChange: {
            required: !0,
            tsType: {
              name: 'signature',
              type: 'function',
              raw: '(event: React.ChangeEvent<HTMLInputElement>) => void',
              signature: {
                arguments: [
                  {
                    type: {
                      name: 'ReactChangeEvent',
                      raw: 'React.ChangeEvent<HTMLInputElement>',
                      elements: [{ name: 'HTMLInputElement' }],
                    },
                    name: 'event',
                  },
                ],
                return: { name: 'void' },
              },
            },
            description: '',
          },
          value: { required: !0, tsType: { name: 'string' }, description: '' },
          disabled: {
            required: !1,
            tsType: { name: 'boolean' },
            description: '',
          },
        },
      };
      const RadioButton_stories = {
          title: 'Radio Button',
          component: RadioButton_RadioButton,
          argTypes: { disabled: { control: 'boolean' } },
        },
        Default = Object.assign(
          ((args) => {
            const [selectedValue, setSelectedValue] = (0, react.useState)(
                'option1'
              ),
              handleChange = (event) => {
                setSelectedValue(event.target.value);
              };
            return (0, jsx_runtime.jsxs)('div', {
              children: [
                (0, jsx_runtime.jsx)(RadioButton_RadioButton, {
                  ...args,
                  label: 'Option 1',
                  checked: 'option1' === selectedValue,
                  onChange: handleChange,
                  name: 'example',
                  value: 'option1',
                }),
                (0, jsx_runtime.jsx)(RadioButton_RadioButton, {
                  ...args,
                  label: 'Option 2',
                  checked: 'option2' === selectedValue,
                  onChange: handleChange,
                  name: 'example',
                  value: 'option2',
                }),
                (0, jsx_runtime.jsx)(RadioButton_RadioButton, {
                  ...args,
                  label: 'Disabled Option',
                  checked: 'option3' === selectedValue,
                  onChange: handleChange,
                  name: 'example',
                  value: 'option3',
                  disabled: !0,
                }),
              ],
            });
          }).bind({}),
          {
            args: {
              label: 'Choose Option',
              name: 'example',
              checked: !1,
              onChange: () => {},
              value: '',
              disabled: !1,
            },
          }
        );
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "Object.assign(Template.bind({}), {\n  args: {\n    label: 'Choose Option',\n    name: 'example',\n    checked: false,\n    onChange: () => {},\n    value: '',\n    disabled: false\n  }\n})",
            ...Default.parameters?.docs?.source,
          },
        },
      };
      const __namedExportsOrder = ['Default'];
    },
  },
]);
