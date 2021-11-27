"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dropUuidOsspQuery = exports.enableUuidOsspQuery = void 0;
var enableUuidOsspQuery = 'CREATE EXTENSION IF NOT EXISTS "uuid-ossp";';
exports.enableUuidOsspQuery = enableUuidOsspQuery;
var dropUuidOsspQuery = 'DROP EXTENSION IF EXISTS "uuid-ossp";';
exports.dropUuidOsspQuery = dropUuidOsspQuery;