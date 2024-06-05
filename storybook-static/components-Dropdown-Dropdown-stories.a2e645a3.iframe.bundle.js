'use strict';
(self.webpackChunkmercredi_patrick_ui_garden =
  self.webpackChunkmercredi_patrick_ui_garden || []).push([
  [215],
  {
    './src/components/Dropdown/Dropdown.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Dropdown_stories,
        });
      __webpack_require__('./node_modules/react/index.js');
      var _templateObject,
        taggedTemplateLiteral = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
        ),
        styled_components_browser_esm = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      const StyledSelect = styled_components_browser_esm.Ay.select(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              '\n    opacity: ',
              ';\n    cursor: ',
              ';\n    background-color: ',
              ';\n',
            ])),
          (props) => (props.disabled ? 0.5 : 1),
          (props) => (props.disabled ? 'not-allowed' : 'pointer'),
          (props) => (props.disabled ? '#f0f0f0' : 'white')
        ),
        Dropdown = (_ref) => {
          let { options, onChange, disabled } = _ref;
          return (0, jsx_runtime.jsx)(StyledSelect, {
            onChange: (e) => onChange(e.target.value),
            disabled,
            children: options.map((option) =>
              (0, jsx_runtime.jsx)(
                'option',
                { value: option.value, children: option.label },
                option.value
              )
            ),
          });
        },
        Dropdown_Dropdown = Dropdown;
      Dropdown.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Dropdown',
        props: {
          options: {
            required: !0,
            tsType: {
              name: 'Array',
              elements: [
                {
                  name: 'signature',
                  type: 'object',
                  raw: '{ value: string; label: string }',
                  signature: {
                    properties: [
                      { key: 'value', value: { name: 'string', required: !0 } },
                      { key: 'label', value: { name: 'string', required: !0 } },
                    ],
                  },
                },
              ],
              raw: '{ value: string; label: string }[]',
            },
            description: '',
          },
          onChange: {
            required: !0,
            tsType: {
              name: 'signature',
              type: 'function',
              raw: '(value: string) => void',
              signature: {
                arguments: [{ type: { name: 'string' }, name: 'value' }],
                return: { name: 'void' },
              },
            },
            description: '',
          },
          disabled: {
            required: !1,
            tsType: { name: 'boolean' },
            description: '',
          },
        },
      };
      const Dropdown_stories = {
          title: 'Dropdown',
          component: Dropdown_Dropdown,
          argTypes: {
            disabled: { control: 'boolean' },
            options: {
              control: 'object',
              defaultValue: [
                { value: '1', label: 'Option 1' },
                { value: '2', label: 'Option 2' },
              ],
            },
            onChange: { action: 'changed' },
          },
        },
        Default = Object.assign(
          ((args) => (0, jsx_runtime.jsx)(Dropdown_Dropdown, { ...args })).bind(
            {}
          ),
          {
            args: {
              disabled: !1,
              options: [
                { value: '1', label: 'Option 1' },
                { value: '2', label: 'Option 2' },
              ],
              onChange: (value) => console.log(value),
            },
          }
        );
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "Object.assign(Template.bind({}), {\n  args: {\n    disabled: false,\n    options: [{\n      value: '1',\n      label: 'Option 1'\n    }, {\n      value: '2',\n      label: 'Option 2'\n    }],\n    onChange: (value: string) => console.log(value) // Explicitly type the value\n  }\n})",
            ...Default.parameters?.docs?.source,
          },
        },
      };
      const __namedExportsOrder = ['Default'];
    },
  },
]);
