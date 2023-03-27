export const LANGUAGE = 'LANGUAGE/CHANGE_LANGUAGE';

export const setLanguage = lang => {
  return {
    type: LANGUAGE,
    payload: {
      lang
    }
  };
};
