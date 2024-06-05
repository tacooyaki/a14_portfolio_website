'use strict';
(self.webpackChunkmercredi_patrick_ui_garden =
  self.webpackChunkmercredi_patrick_ui_garden || []).push([
  [747],
  {
    './src/components/Label/Label.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Label_stories,
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
      const StyledLabel = styled_components_browser_esm.Ay.span(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              '\n    color: ',
              ';\n    cursor: ',
              ';\n    opacity: ',
              ';\n',
            ])),
          (props) => props.color || 'black',
          (props) => (props.disabled ? 'not-allowed' : 'pointer'),
          (props) => (props.disabled ? 0.5 : 1)
        ),
        Label = (_ref) => {
          let { children, disabled, color } = _ref;
          return (0, jsx_runtime.jsx)(StyledLabel, {
            disabled,
            color,
            children,
          });
        },
        Label_Label = Label;
      Label.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Label',
        props: {
          children: {
            required: !0,
            tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' },
            description: '',
          },
          disabled: {
            required: !1,
            tsType: { name: 'boolean' },
            description: '',
          },
          color: { required: !1, tsType: { name: 'string' }, description: '' },
        },
      };
      const Label_stories = {
          title: 'Label',
          component: Label_Label,
          argTypes: {
            children: { control: 'text' },
            color: { control: 'color' },
            disabled: { control: 'boolean' },
          },
        },
        Default = Object.assign(
          ((args) => (0, jsx_runtime.jsx)(Label_Label, { ...args })).bind({}),
          {
            args: {
              children: 'Label Text',
              color: 'rgba(16,163,107,0.92)',
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
              "Object.assign(Template.bind({}), {\n  args: {\n    children: 'Label Text',\n    color: 'rgba(16,163,107,0.92)',\n    disabled: false\n  }\n})",
            ...Default.parameters?.docs?.source,
          },
        },
      };
      const __namedExportsOrder = ['Default'];
    },
  },
]);
