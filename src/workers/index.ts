import { expose } from 'comlink';
import { changeGrid } from '../utils/gridUtils';

const exports = {
    changeGrid
};

export type AppWorker = typeof exports;

expose(exports);