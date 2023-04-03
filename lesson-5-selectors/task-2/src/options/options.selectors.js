import { createSelector } from 'reselect';
export const optionsListSelector = state => {
  return state.options.optionsList;
};

export const selectedListSelector = state => {
  return state.options.selected;
};

export const selectedOptionsSelector = createSelector(
  [optionsListSelector, selectedListSelector],
  (allOptionsList, selectedIds) => {
    return allOptionsList.filter(option =>
      selectedIds.includes(option.id)
    );
  }
);

export const availableOptionsSelector = createSelector(
  [optionsListSelector, selectedListSelector],
  (allOptionsList, selectedIds) => {
    return allOptionsList.filter(
      option => !selectedIds.includes(option.id)
    );
  }
);
