/* eslint-disable import/prefer-default-export */
/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

// import MyLib from '/opt/nodejs/build/MyLib';
import MyLib from 'amplify/backend/function/wakebookLayer/lib/nodejs/build/MyLib';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const handler = async (event, context, callback) => {
  try {
    const result = MyLib();
    console.log('result', result);
  } catch (err) {
    console.log({ err });
    callback(err, null);
  }
  return null;
};
