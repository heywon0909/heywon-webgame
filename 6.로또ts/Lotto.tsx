import * as React from "react";
import { useState, useRef, useEffect, useMemo, useCallback } from "react";

function getWinNumbers() {
  const candidate = Array(45)
    .fill(null)
    .map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(
      candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
    );
  }
}
