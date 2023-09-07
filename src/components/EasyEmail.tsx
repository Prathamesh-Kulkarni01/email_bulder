import React, { Suspense } from "react";
import { SimpleLayout } from "easy-email-extensions";
import {
  EmailEditorProvider,
  useFocusIdx,
  useBlock,
  EmailEditor
} from "easy-email-editor";

import "easy-email-editor/lib/style.css";

import "easy-email-extensions/lib/style.css";

import "@arco-themes/react-easy-email-theme-purple/css/arco.css";

import { Button } from "antd";

const MockComponent = () => {
  const { focusIdx } = useFocusIdx();
  const { focusBlock } = useBlock();

  return (
    <>
      <>Focus Id: {focusIdx}</>
      <>Focus Block: {focusBlock?.type}</>
    </>
  );
};
const getData = async () => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("a");
    }, 1000);
  });
};

const fetchData = async () => {
  const data = await getData();
  return data;
};

export const testMergeTags = {
  user: {
    name: "Ryan",
    age: 26,
    avatar:
      "http://res.cloudinary.com/dwkp0e1yo/image/upload/v1665841428/pnmyosjz0x0kmqlfxhrp.png",
    email: "easy-email@gmail.com",
    project: "Easy email"
  },
  date: {
    today: new Date().toDateString()
  },
  emptyList: [],
  product_list: [
    {
      id2: 0,
      data: {
        a: "hello"
      },
      image:
        "http://res.cloudinary.com/dwkp0e1yo/image/upload/v1665841462/l2hayusrfwffltdc105o.png",
      title: "Slim Fit Printed shirt",
      price: "$59.99 HKD",
      url: "https://easy-email-m-ryan.vercel.app"
    },
    {
      id: 1,
      image:
        "http://res.cloudinary.com/dwkp0e1yo/image/upload/v1665841503/uxkaqveakixnt5nvhnyf.png",
      title: "Casual Collar Youth Handsome",
      price: "$39.99 HKD",
      url: "https://easy-email-m-ryan.vercel.app"
    },
    {
      id: 2,
      image:
        "http://res.cloudinary.com/dwkp0e1yo/image/upload/v1665841540/gc0dec0hisoyp0t2hgaf.png",
      title: "Shirt Business Casual",
      price: "$49.99 HKD",
      url: "https://easy-email-m-ryan.vercel.app"
    },
    {
      id: 3,
      image:
        "http://res.cloudinary.com/dwkp0e1yo/image/upload/v1665841462/l2hayusrfwffltdc105o.png",
      title: "Slim Fit Printed shirt",
      price: "$59.99 HKD",
      url: "https://easy-email-m-ryan.vercel.app"
    },
    {
      id: 4,
      image:
        "http://res.cloudinary.com/dwkp0e1yo/image/upload/v1665841503/uxkaqveakixnt5nvhnyf.png",
      title: "Casual Collar Youth Handsome",
      price: "$39.99 HKD",
      url: "https://easy-email-m-ryan.vercel.app"
    },
    {
      id: 5,
      image:
        "http://res.cloudinary.com/dwkp0e1yo/image/upload/v1665841540/gc0dec0hisoyp0t2hgaf.png",
      title: "Shirt Business Casual",
      price: "$49.99 HKD",
      url: "https://easy-email-m-ryan.vercel.app"
    }
  ],
  company: {
    name: "Easy email",
    member_list: [
      {
        id: 1,
        name: "James",
        hobby: "Swimming",
        age: 28,
        product_list: [
          {
            id: 0,
            image:
              "https://assets.maocanhua.cn/da9b173d-b272-4101-aa25-4635ed95e9e3-image.png",
            title: "Slim Fit Printed shirt",
            price: "$59.99 HKD",
            url: "https://easy-email-m-ryan.vercel.app"
          },
          {
            id: 1,
            image:
              "https://assets.maocanhua.cn/4ef7cb65-ee1f-4b12-832c-17ab07a8b9ac-image.png",
            title: "Casual Collar Youth Handsome Slim Print Blazer",
            price: "$59.99 HKD",
            url: "https://easy-email-m-ryan.vercel.app"
          },
          {
            id: 2,
            image:
              "https://assets.maocanhua.cn/88fe9bfa-547f-4d5e-9ba5-ac6b91572dde-image.png",
            title: "Shirt Business Casual",
            price: "$59.99 HKD",
            url: "https://easy-email-m-ryan.vercel.app"
          }
        ]
      },
      {
        id: 2,
        name: "Nick",
        hobby: "Coding",
        age: 29,
        product_list: [
          {
            id: 0,
            image:
              "https://assets.maocanhua.cn/da9b173d-b272-4101-aa25-4635ed95e9e3-image.png",
            title: "Slim Fit Printed shirt",
            price: "$59.99 HKD",
            url: "https://easy-email-m-ryan.vercel.app"
          },
          {
            id: 1,
            image:
              "https://assets.maocanhua.cn/4ef7cb65-ee1f-4b12-832c-17ab07a8b9ac-image.png",
            title: "Casual Collar Youth Handsome Slim Print Blazer",
            price: "$59.99 HKD",
            url: "https://easy-email-m-ryan.vercel.app"
          },
          {
            id: 2,
            image:
              "https://assets.maocanhua.cn/88fe9bfa-547f-4d5e-9ba5-ac6b91572dde-image.png",
            title: "Shirt Business Casual",
            price: "$59.99 HKD",
            url: "https://easy-email-m-ryan.vercel.app"
          }
        ]
      },
      {
        id: 3,
        name: "Robert",
        hobby: "skiing",
        age: 30,
        product_list: [
          {
            id: 0,
            image:
              "https://assets.maocanhua.cn/da9b173d-b272-4101-aa25-4635ed95e9e3-image.png",
            title: "Slim Fit Printed shirt",
            price: "$59.99 HKD",
            url: "https://easy-email-m-ryan.vercel.app"
          },
          {
            id: 1,
            image:
              "https://assets.maocanhua.cn/4ef7cb65-ee1f-4b12-832c-17ab07a8b9ac-image.png",
            title: "Casual Collar Youth Handsome Slim Print Blazer",
            price: "$59.99 HKD",
            url: "https://easy-email-m-ryan.vercel.app"
          },
          {
            id: 2,
            image:
              "https://assets.maocanhua.cn/88fe9bfa-547f-4d5e-9ba5-ac6b91572dde-image.png",
            title: "Shirt Business Casual",
            price: "$59.99 HKD",
            url: "https://easy-email-m-ryan.vercel.app"
          }
        ]
      }
    ]
  }
};

const initialValues = {
  subject: "Welcome to Easy-email",
  subTitle: "Nice to meet you!",
  content: {
    type: "page",
    data: {
      value: {
        breakpoint: "480px",
        headAttributes: "",
        "font-size": "14px",
        "line-height": "1.7",
        headStyles: [],
        fonts: [],
        responsive: true,
        "font-family": "lucida Grande,Verdana,Microsoft YaHei",
        "text-color": "#000000"
      }
    },
    attributes: {
      "background-color": "#F4F4F4",
      width: "600px",
      "css-class": "mjml-body"
    },
    children: [
      {
        type: "section",
        data: {
          value: {
            noWrap: false
          }
        },
        attributes: {
          padding: "30px 0px 0px 0px",
          border: "none",
          direction: "ltr",
          "text-align": "center",
          "background-repeat": "repeat",
          "background-size": "auto",
          "background-position": "top center",
          "background-color": "#ffffff"
        },
        children: [
          {
            type: "column",
            data: {
              value: {}
            },
            attributes: {
              border: "none",
              "vertical-align": "top",
              padding: "0px 0px 0px 0px"
            },
            children: [
              {
                type: "image",
                data: {
                  value: {}
                },
                attributes: {
                  align: "center",
                  height: "auto",
                  src:
                    "https://assets.maocanhua.cn/b999e7e4-9242-4435-a4f6-c8f1d6fdfd96-image.png",
                  target: "_blank",
                  width: "214px",
                  padding: "10px 25px 10px 25px"
                },
                children: []
              },
              {
                type: "text",
                data: {
                  value: {
                    content:
                      '<p style="text-align: center; margin: 10px 0;color:#151e23;font-size:14px;font-family:Georgia,Helvetica,Arial,sans-serif">Product | Concept | Contact</p>'
                  }
                },
                attributes: {
                  align: "left",
                  "font-size": "13px",
                  "line-height": "22px",
                  color: "#55575d",
                  "font-family": "Arial, sans-serif",
                  padding: "0px 25px 15px 25px"
                },
                children: []
              }
            ]
          }
        ]
      },
      {
        type: "section",
        data: {
          value: {
            noWrap: false
          }
        },
        attributes: {
          "background-repeat": "repeat",
          "background-size": "auto",
          "background-position": "top center",
          border: "none",
          direction: "ltr",
          "text-align": "center",
          padding: "0px 0px 0px 0px"
        },
        children: [
          {
            type: "column",
            data: {
              value: {}
            },
            attributes: {
              border: "none",
              "vertical-align": "top",
              padding: "0px 0px 0px 0px"
            },
            children: [
              {
                type: "image",
                data: {
                  value: {}
                },
                attributes: {
                  align: "center",
                  height: "auto",
                  src:
                    "https://assets.maocanhua.cn/ed0590da-b6dc-4d14-bfc7-6f1931a390fd-image.png",
                  target: "_blank",
                  width: "600px",
                  padding: "0px 0px 0px 0px"
                },
                children: []
              }
            ]
          }
        ]
      },
      {
        type: "section",
        data: {
          value: {
            noWrap: false
          }
        },
        attributes: {
          "background-repeat": "repeat",
          "background-size": "auto",
          "background-position": "top center",
          border: "none",
          direction: "ltr",
          "text-align": "center",
          "background-color": "#ffffff",
          padding: "30px 0px 0px 0px"
        },
        children: [
          {
            type: "column",
            data: {
              value: {}
            },
            attributes: {
              border: "none",
              "vertical-align": "top",
              padding: "0px 0px 0px 0px"
            },
            children: [
              {
                type: "text",
                data: {
                  value: {
                    content:
                      '<p style="line-height: 30px; margin: 10px 0; text-align: center; color:#151e23; font-size:30p; font-family:Georgia,Helvetica,Arial,sans-serif">- Our Holiday Recipes -</p>'
                  }
                },
                attributes: {
                  align: "left",
                  "font-size": "30px",
                  "line-height": "22px",
                  color: "#55575d",
                  "font-family": "Arial, sans-serif",
                  padding: "10px 25px 10px 25px"
                },
                children: []
              }
            ]
          }
        ]
      },
      {
        type: "section",
        data: {
          value: {
            noWrap: false
          }
        },
        attributes: {
          "background-repeat": "repeat",
          "background-size": "auto",
          "background-position": "top center",
          border: "none",
          direction: "ltr",
          "text-align": "center",
          "background-color": "#ffffff",
          padding: "20px 0px 0px 0px"
        },
        children: [
          {
            type: "column",
            data: {
              value: {}
            },
            attributes: {
              border: "none",
              "vertical-align": "top",
              padding: "0px 0px 0px 0px"
            },
            children: [
              {
                type: "image",
                data: {
                  value: {}
                },
                attributes: {
                  align: "center",
                  height: "auto",
                  src:
                    "https://assets.maocanhua.cn/be61d137-bb44-4358-a681-dea81d2a8ec1-image.png",
                  target: "_blank",
                  width: "1200px",
                  padding: "0px 30px 20px 30px"
                },
                children: []
              }
            ]
          },
          {
            type: "column",
            data: {
              value: {}
            },
            attributes: {
              border: "none",
              "vertical-align": "top",
              padding: "0px 0px 0px 0px"
            },
            children: [
              {
                type: "text",
                data: {
                  value: {
                    content:
                      '<p style="margin: 10px 0; color:#151e23; font-size:16px; font-family:Georgia,Helvetica,Arial,sans-serif"><b>Cake Title</b></p>\n          <p style="line-height: 16px; margin: 10px 0;font-size:14px; color:#151e23; font-family:Georgia,Helvetica,Arial,sans-serif; color:#354552">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>\n          <p style="line-height: 16px; margin: 10px 0; color:#354552; font-size:14px; font-family:Georgia,Helvetica,Arial,sans-serif"><u>Choose me</u> &gt;</p>'
                  }
                },
                attributes: {
                  align: "left",
                  "font-size": "13px",
                  "line-height": "22px",
                  color: "#55575d",
                  "font-family": "Arial, sans-serif",
                  padding: "0px 40px 0px 40px"
                },
                children: []
              }
            ]
          }
        ]
      },
      {
        type: "section",
        data: {
          value: {
            noWrap: false
          }
        },
        attributes: {
          "background-repeat": "repeat",
          "background-size": "auto",
          "background-position": "top center",
          border: "none",
          direction: "rtl",
          "text-align": "center",
          "background-color": "#ffffff",
          padding: "0px 0px 0px 0px"
        },
        children: [
          {
            type: "column",
            data: {
              value: {}
            },
            attributes: {
              border: "none",
              "vertical-align": "top",
              padding: "0px 0px 0px 0px"
            },
            children: [
              {
                type: "image",
                data: {
                  value: {}
                },
                attributes: {
                  align: "center",
                  height: "auto",
                  src:
                    "https://assets.maocanhua.cn/b3e16b18-9385-421e-b6a7-b28a749d6abf-image.png",
                  target: "_blank",
                  width: "1200px",
                  padding: "20px 30px 20px 30px"
                },
                children: []
              }
            ]
          },
          {
            type: "column",
            data: {
              value: {}
            },
            attributes: {
              border: "none",
              "vertical-align": "top",
              padding: "0px 0px 0px 0px"
            },
            children: [
              {
                type: "text",
                data: {
                  value: {
                    content:
                      '<p style="margin: 10px 0; color:#151e23; font-size:16px; font-family:Georgia,Helvetica,Arial,sans-serif"><b>Cake Title</b></p>\n          <p style="line-height: 16px; margin: 10px 0;font-size:14px; color:#151e23; font-family:Georgia,Helvetica,Arial,sans-serif; color:#354552">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>\n          <p style="line-height: 16px; margin: 10px 0; color:#354552; font-size:14px; font-family:Georgia,Helvetica,Arial,sans-serif"><u>Choose me</u> &gt;</p>'
                  }
                },
                attributes: {
                  align: "left",
                  "font-size": "13px",
                  "line-height": "22px",
                  color: "#55575d",
                  "font-family": "Arial, sans-serif",
                  padding: "0px 40px 0px 40px"
                },
                children: []
              }
            ]
          }
        ]
      },
      {
        type: "section",
        data: {
          value: {
            noWrap: false
          }
        },
        attributes: {
          "background-repeat": "repeat",
          "background-size": "auto",
          "background-position": "top center",
          border: "none",
          direction: "ltr",
          "text-align": "center",
          "background-color": "#ffffff",
          padding: "0px 0px 0px 0px"
        },
        children: [
          {
            type: "column",
            data: {
              value: {}
            },
            attributes: {
              border: "none",
              "vertical-align": "top",
              padding: "0px 0px 0px 0px"
            },
            children: [
              {
                type: "image",
                data: {
                  value: {}
                },
                attributes: {
                  align: "center",
                  height: "auto",
                  src:
                    "https://assets.maocanhua.cn/6c23a5d0-ec6c-4634-8753-49e4a2da407e-image.png",
                  target: "_blank",
                  width: "1200px",
                  padding: "20px 30px 20px 30px"
                },
                children: []
              }
            ]
          },
          {
            type: "column",
            data: {
              value: {}
            },
            attributes: {
              border: "none",
              "vertical-align": "top",
              padding: "0px 0px 0px 0px"
            },
            children: [
              {
                type: "text",
                data: {
                  value: {
                    content:
                      '<p style="margin: 10px 0; color:#151e23; font-size:16px; font-family:Georgia,Helvetica,Arial,sans-serif"><b>Cake Title</b></p>\n          <p style="line-height: 16px; margin: 10px 0;font-size:14px; color:#151e23; font-family:Georgia,Helvetica,Arial,sans-serif; color:#354552">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>\n          <p style="line-height: 16px; margin: 10px 0; color:#354552; font-size:14px; font-family:Georgia,Helvetica,Arial,sans-serif"><u>Choose me</u> &gt;</p>'
                  }
                },
                attributes: {
                  align: "left",
                  "font-size": "13px",
                  "line-height": "22px",
                  color: "#55575d",
                  "font-family": "Arial, sans-serif",
                  padding: "0px 40px 0px 40px"
                },
                children: []
              }
            ]
          }
        ]
      },
      {
        type: "section",
        data: {
          value: {
            noWrap: false
          }
        },
        attributes: {
          "background-repeat": "repeat",
          "background-size": "auto",
          "background-position": "top center",
          border: "none",
          direction: "ltr",
          "text-align": "center",
          "background-color": "#ffffff",
          padding: "0px 0px 20px 0px"
        },
        children: [
          {
            type: "column",
            data: {
              value: {}
            },
            attributes: {
              border: "none",
              "vertical-align": "top",
              padding: "0px 0px 0px 0px"
            },
            children: [
              {
                type: "button",
                data: {
                  value: {
                    content: "Discover all desserts"
                  }
                },
                attributes: {
                  align: "center",
                  "background-color": "#354552",
                  color: "#ffffff",
                  "font-weight": "normal",
                  "border-radius": "3px",
                  "line-height": "120%",
                  target: "_blank",
                  "vertical-align": "middle",
                  border: "none",
                  "text-align": "center",
                  href: "#",
                  "font-size": "14px",
                  "font-family": "Georgia, Helvetica, Arial, sans-serif",
                  "text-decoration": "none",
                  "text-transform": "none",
                  padding: "10px 25px 10px 25px"
                },
                children: []
              }
            ]
          }
        ]
      },
      {
        type: "section",
        data: {
          value: {
            noWrap: false
          }
        },
        attributes: {
          "background-repeat": "repeat",
          "background-size": "auto",
          "background-position": "top center",
          border: "none",
          direction: "ltr",
          "text-align": "center",
          "background-color": "#ffffff",
          padding: "0px 0px 0px 0px"
        },
        children: [
          {
            type: "column",
            data: {
              value: {}
            },
            attributes: {
              border: "none",
              "vertical-align": "top",
              padding: "0px 0px 0px 0px"
            },
            children: [
              {
                type: "image",
                data: {
                  value: {}
                },
                attributes: {
                  align: "center",
                  height: "auto",
                  src:
                    "https://assets.maocanhua.cn/0a270377-104e-4ea8-bd94-3df6d7afaa01-image.png",
                  target: "_blank",
                  width: "600px",
                  padding: "0px 0px 0px 0px"
                },
                children: []
              }
            ]
          }
        ]
      },
      {
        type: "section",
        data: {
          value: {
            noWrap: false
          }
        },
        attributes: {
          "background-repeat": "repeat",
          "background-size": "auto",
          "background-position": "top center",
          border: "none",
          direction: "ltr",
          "text-align": "center",
          "background-color": "#ffffff",
          padding: "20px 0px 20px 0px"
        },
        children: [
          {
            type: "column",
            data: {
              value: {}
            },
            attributes: {
              border: "none",
              "vertical-align": "top",
              padding: "0px 0px 0px 0px"
            },
            children: [
              {
                type: "image",
                data: {
                  value: {}
                },
                attributes: {
                  align: "center",
                  height: "auto",
                  src:
                    "https://assets.maocanhua.cn/a35965f4-900a-43a5-9c96-cef1e398e9c5-image.png",
                  target: "_blank",
                  width: "202px",
                  padding: "10px 25px 10px 25px"
                },
                children: []
              },
              {
                type: "social",
                data: {
                  value: {
                    elements: [
                      {
                        href: "",
                        "icon-size": "20px",
                        target: "_blank",
                        src:
                          "https://assets.maocanhua.cn/93013b18-062d-48d7-ae00-4a5f0a9ac988.png",
                        content: "Facebook",
                        "font-size": "13px",
                        "line-height": "22px",
                        "text-padding": "4px 4px 4px 0",
                        "vertical-align": "middle",
                        "text-decoration": "none",
                        color: "#333333",
                        name: "facebook"
                      },
                      {
                        href: "",
                        "icon-size": "20px",
                        target: "_blank",
                        src:
                          "https://assets.maocanhua.cn/a81ddd4b-3a12-47be-91f3-28d71eced397.png",
                        content: "Google",
                        "font-size": "13px",
                        "line-height": "22px",
                        "text-padding": "4px 4px 4px 0",
                        "vertical-align": "middle",
                        "text-decoration": "none",
                        color: "#333333",
                        name: "pinterest"
                      },
                      {
                        href: "",
                        "icon-size": "20px",
                        target: "_blank",
                        src:
                          "https://assets.maocanhua.cn/0a411326-17c5-4814-ad3a-6927266f097e.png",
                        content: "Twitter",
                        "font-size": "13px",
                        "line-height": "22px",
                        "text-padding": "4px 4px 4px 0",
                        "vertical-align": "middle",
                        "text-decoration": "none",
                        color: "#333333",
                        name: "instagram"
                      }
                    ]
                  }
                },
                attributes: {
                  align: "center",
                  color: "#333333",
                  mode: "horizontal",
                  "font-size": "13px",
                  "font-weight": "normal",
                  "border-radius": "3px",
                  "line-height": "22px",
                  "text-padding": "4px 4px 4px 0px",
                  "icon-padding": "0px",
                  "icon-size": "20px",
                  padding: "10px 25px 10px 25px"
                },
                children: []
              }
            ]
          }
        ]
      }
    ]
  }
};

const fontList = [
  "Arial",
  "Tahoma",
  "Verdana",
  "Times New Roman",
  "Courier New",
  "Georgia",
  "Lato",
  "Montserrat",
  "黑体",
  "仿宋",
  "楷体",
  "标楷体",
  "华文仿宋",
  "华文楷体",
  "宋体",
  "微软雅黑"
].map((item) => ({ value: item, label: item }));

const EmailEditorComponent = () => {
  const componentId = Math.floor(Date.now() / 1000);

  if (!initialValues) return null;

  return (
    <EmailEditorProvider
      key={componentId}
      data={initialValues}
      height="calc(100vh - 72px)"
      autoComplete
      fontList={fontList}
      dashed
      mergeTags={testMergeTags}
      onSubmit={(values) => console.log(values)}
    >
      {({ values }, { submit, restart }) => {
        return (
          <>
            <MockComponent />
            <Button
              type="primary"
              onClick={() => {
                console.log(values);
                submit();
              }}
            />
            <Button
              value="Restart"
              type="primary"
              onClick={() => {
                restart();
              }}
            />
            <SimpleLayout showSourceCode>
              <Suspense fallback={<>Loading...</>}>
                <EmailEditor />
              </Suspense>
            </SimpleLayout>
          </>
        );
      }}
    </EmailEditorProvider>
  );
};

export { EmailEditorComponent as EmailEditor };
