// JSON Types
// ====================

export declare type JSONPrimitive = string | number | boolean;

export declare type JSONValue = JSONPrimitive | JSONObject | JSONArray;

export declare interface JSONObject {
  [x: string]: JSONValue;
}

export declare interface JSONArray extends Array<JSONValue> {}
