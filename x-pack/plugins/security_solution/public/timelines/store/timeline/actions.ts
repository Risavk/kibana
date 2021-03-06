/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import actionCreatorFactory from 'typescript-fsa';

import { Filter } from '../../../../../../../src/plugins/data/public';
import { Sort } from '../../../timelines/components/timeline/body/sort';
import {
  DataProvider,
  DataProviderType,
  QueryOperator,
} from '../../../timelines/components/timeline/data_providers/data_provider';
import { SerializedFilterQuery } from '../../../common/store/types';

import { KqlMode, TimelineModel, ColumnHeaderOptions } from './model';
import { TimelineNonEcsData } from '../../../../common/search_strategy/timeline';
import {
  TimelineEventsType,
  TimelineExpandedDetail,
  TimelineExpandedDetailType,
  TimelineTypeLiteral,
  RowRendererId,
  TimelineTabs,
} from '../../../../common/types/timeline';
import { InsertTimeline } from './types';

const actionCreator = actionCreatorFactory('x-pack/security_solution/local/timeline');

export const addHistory = actionCreator<{ id: string; historyId: string }>('ADD_HISTORY');

export const addNote = actionCreator<{ id: string; noteId: string }>('ADD_NOTE');

export const addNoteToEvent = actionCreator<{ id: string; noteId: string; eventId: string }>(
  'ADD_NOTE_TO_EVENT'
);

export type ToggleDetailPanel = TimelineExpandedDetailType & {
  tabType?: TimelineTabs;
  timelineId: string;
};

export const toggleDetailPanel = actionCreator<ToggleDetailPanel>('TOGGLE_DETAIL_PANEL');

export const upsertColumn = actionCreator<{
  column: ColumnHeaderOptions;
  id: string;
  index: number;
}>('UPSERT_COLUMN');

export const addProvider = actionCreator<{ id: string; provider: DataProvider }>('ADD_PROVIDER');

export const applyDeltaToColumnWidth = actionCreator<{
  id: string;
  columnId: string;
  delta: number;
}>('APPLY_DELTA_TO_COLUMN_WIDTH');

export interface TimelineInput {
  id: string;
  dataProviders?: DataProvider[];
  dateRange?: {
    start: string;
    end: string;
  };
  excludedRowRendererIds?: RowRendererId[];
  expandedDetail?: TimelineExpandedDetail;
  filters?: Filter[];
  columns: ColumnHeaderOptions[];
  itemsPerPage?: number;
  indexNames: string[];
  kqlQuery?: {
    filterQuery: SerializedFilterQuery | null;
  };
  show?: boolean;
  sort?: Sort[];
  showCheckboxes?: boolean;
  timelineType?: TimelineTypeLiteral;
  templateTimelineId?: string | null;
  templateTimelineVersion?: number | null;
}

export const saveTimeline = actionCreator<TimelineInput>('SAVE_TIMELINE');

export const createTimeline = actionCreator<TimelineInput>('CREATE_TIMELINE');

export const pinEvent = actionCreator<{ id: string; eventId: string }>('PIN_EVENT');

export const removeColumn = actionCreator<{
  id: string;
  columnId: string;
}>('REMOVE_COLUMN');

export const removeProvider = actionCreator<{
  id: string;
  providerId: string;
  andProviderId?: string;
}>('REMOVE_PROVIDER');

export const showTimeline = actionCreator<{ id: string; show: boolean }>('SHOW_TIMELINE');

export const updateTimelineGraphEventId = actionCreator<{ id: string; graphEventId: string }>(
  'UPDATE_TIMELINE_GRAPH_EVENT_ID'
);

export const unPinEvent = actionCreator<{ id: string; eventId: string }>('UN_PIN_EVENT');

export const updateTimeline = actionCreator<{
  id: string;
  timeline: TimelineModel;
}>('UPDATE_TIMELINE');

export const addTimeline = actionCreator<{
  id: string;
  timeline: TimelineModel;
  savedTimeline?: boolean;
}>('ADD_TIMELINE');

export const setInsertTimeline = actionCreator<InsertTimeline | null>('SET_INSERT_TIMELINE');

export const startTimelineSaving = actionCreator<{
  id: string;
}>('START_TIMELINE_SAVING');

export const endTimelineSaving = actionCreator<{
  id: string;
}>('END_TIMELINE_SAVING');

export const updateIsLoading = actionCreator<{
  id: string;
  isLoading: boolean;
}>('UPDATE_LOADING');

export const updateColumns = actionCreator<{
  id: string;
  columns: ColumnHeaderOptions[];
}>('UPDATE_COLUMNS');

export const updateDataProviderEnabled = actionCreator<{
  id: string;
  enabled: boolean;
  providerId: string;
  andProviderId?: string;
}>('TOGGLE_PROVIDER_ENABLED');

export const updateDataProviderExcluded = actionCreator<{
  id: string;
  excluded: boolean;
  providerId: string;
  andProviderId?: string;
}>('TOGGLE_PROVIDER_EXCLUDED');

export const dataProviderEdited = actionCreator<{
  andProviderId?: string;
  excluded: boolean;
  field: string;
  id: string;
  operator: QueryOperator;
  providerId: string;
  value: string | number;
}>('DATA_PROVIDER_EDITED');

export const updateDataProviderKqlQuery = actionCreator<{
  id: string;
  kqlQuery: string;
  providerId: string;
}>('PROVIDER_EDIT_KQL_QUERY');

export const updateDataProviderType = actionCreator<{
  andProviderId?: string;
  id: string;
  type: DataProviderType;
  providerId: string;
}>('UPDATE_PROVIDER_TYPE');

export const updateKqlMode = actionCreator<{ id: string; kqlMode: KqlMode }>('UPDATE_KQL_MODE');

export const applyKqlFilterQuery = actionCreator<{
  id: string;
  filterQuery: SerializedFilterQuery;
}>('APPLY_KQL_FILTER_QUERY');

export const updateIsFavorite = actionCreator<{ id: string; isFavorite: boolean }>(
  'UPDATE_IS_FAVORITE'
);

export const updateIsLive = actionCreator<{ id: string; isLive: boolean }>('UPDATE_IS_LIVE');

export const updateItemsPerPage = actionCreator<{ id: string; itemsPerPage: number }>(
  'UPDATE_ITEMS_PER_PAGE'
);

export const updateItemsPerPageOptions = actionCreator<{
  id: string;
  itemsPerPageOptions: number[];
}>('UPDATE_ITEMS_PER_PAGE_OPTIONS');

export const updateTitleAndDescription = actionCreator<{
  description: string;
  id: string;
  title: string;
}>('UPDATE_TITLE_AND_DESCRIPTION');

export const updatePageIndex = actionCreator<{ id: string; activePage: number }>(
  'UPDATE_PAGE_INDEX'
);

export const updateProviders = actionCreator<{ id: string; providers: DataProvider[] }>(
  'UPDATE_PROVIDERS'
);

export const updateRange = actionCreator<{ id: string; start: string; end: string }>(
  'UPDATE_RANGE'
);

export const updateSort = actionCreator<{ id: string; sort: Sort[] }>('UPDATE_SORT');

export const updateAutoSaveMsg = actionCreator<{
  timelineId: string | null;
  newTimelineModel: TimelineModel | null;
}>('UPDATE_AUTO_SAVE');

export const showCallOutUnauthorizedMsg = actionCreator('SHOW_CALL_OUT_UNAUTHORIZED_MSG');

export const setSavedQueryId = actionCreator<{
  id: string;
  savedQueryId: string | null;
}>('SET_TIMELINE_SAVED_QUERY');

export const setFilters = actionCreator<{
  id: string;
  filters: Filter[];
}>('SET_TIMELINE_FILTERS');

export const setSelected = actionCreator<{
  id: string;
  eventIds: Readonly<Record<string, TimelineNonEcsData[]>>;
  isSelected: boolean;
  isSelectAllChecked: boolean;
}>('SET_TIMELINE_SELECTED');

export const clearSelected = actionCreator<{
  id: string;
}>('CLEAR_TIMELINE_SELECTED');

export const setEventsLoading = actionCreator<{
  id: string;
  eventIds: string[];
  isLoading: boolean;
}>('SET_TIMELINE_EVENTS_LOADING');

export const clearEventsLoading = actionCreator<{
  id: string;
}>('CLEAR_TIMELINE_EVENTS_LOADING');

export const setEventsDeleted = actionCreator<{
  id: string;
  eventIds: string[];
  isDeleted: boolean;
}>('SET_TIMELINE_EVENTS_DELETED');

export const clearEventsDeleted = actionCreator<{
  id: string;
}>('CLEAR_TIMELINE_EVENTS_DELETED');

export const updateEventType = actionCreator<{ id: string; eventType: TimelineEventsType }>(
  'UPDATE_EVENT_TYPE'
);

export const setExcludedRowRendererIds = actionCreator<{
  id: string;
  excludedRowRendererIds: RowRendererId[];
}>('SET_TIMELINE_EXCLUDED_ROW_RENDERER_IDS');

export const updateIndexNames = actionCreator<{
  id: string;
  indexNames: string[];
}>('UPDATE_INDEXES_NAME');

export const setActiveTabTimeline = actionCreator<{
  id: string;
  activeTab: TimelineTabs;
}>('SET_ACTIVE_TAB_TIMELINE');

export const toggleModalSaveTimeline = actionCreator<{
  id: string;
  showModalSaveTimeline: boolean;
}>('TOGGLE_MODAL_SAVE_TIMELINE');
