import _UTIL from "../../util"

let _rt = loadRuntime();

_UTIL.exportTo("getFileSystemManager", _rt, jsb);
_UTIL.exportTo("downloadFile", _rt, jsb);