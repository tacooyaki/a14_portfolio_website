'use strict';
(self.webpackChunkmercredi_patrick_ui_garden =
  self.webpackChunkmercredi_patrick_ui_garden || []).push([
  [15],
  {
    './src/components/Img/Img.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Img_stories,
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
      const StyledImg = styled_components_browser_esm.Ay.img(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              '\n  max-width: 100%;\n  height: auto;\n  opacity: ',
              ';\n  cursor: ',
              ';\n',
            ])),
          (props) => (props.disabled ? 0.5 : 1),
          (props) => (props.disabled ? 'not-allowed' : 'pointer')
        ),
        Img = (_ref) => {
          let { src, alt, disabled } = _ref;
          return (0, jsx_runtime.jsx)(StyledImg, { src, alt, disabled });
        },
        Img_Img = Img;
      Img.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Img',
        props: {
          src: { required: !0, tsType: { name: 'string' }, description: '' },
          alt: { required: !0, tsType: { name: 'string' }, description: '' },
          disabled: {
            required: !1,
            tsType: { name: 'boolean' },
            description: '',
          },
        },
      };
      const Img_stories = {
          title: 'Img',
          component: Img_Img,
          argTypes: { disabled: { control: 'boolean' } },
        },
        Default = Object.assign(
          ((args) => (0, jsx_runtime.jsx)(Img_Img, { ...args })).bind({}),
          {
            args: {
              src: 'https://placehold.jp/20/20451c/ffffff/150x150.png',
              alt: 'Placeholder Image',
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
              "Object.assign(Template.bind({}), {\n  args: {\n    src: 'https://placehold.jp/20/20451c/ffffff/150x150.png',\n    alt: 'Placeholder Image',\n    disabled: false // Default state\n  }\n})",
            ...Default.parameters?.docs?.source,
          },
        },
      };
      const __namedExportsOrder = ['Default'];
    },
  },
]);
