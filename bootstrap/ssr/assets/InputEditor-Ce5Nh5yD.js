import { jsx, jsxs } from "react/jsx-runtime";
import React, { forwardRef, memo, useEffect, useRef, useState } from "react";
import { appendExtraPluginsToEditorConfig, assignElementToEditorConfig, assignInitialDataToEditorConfig, compareInstalledCKBaseVersion, createDefer, createIntegrationUsageDataPlugin, getInstalledCKBaseFeatures, isCKEditorFreeLicense, once, uid } from "@ckeditor/ckeditor5-integrations-common";
//#region \0rolldown/runtime.js
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp$1(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp$1(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp$1(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
//#endregion
//#region node_modules/@ckeditor/ckeditor5-react/dist/index.js
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
	enumerable: true,
	configurable: true,
	writable: true,
	value
}) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _LifeCycleElementSemaphore = class _LifeCycleElementSemaphore {
	constructor(element, lifecycle) {
		/**
		* This should define async methods for initializing and destroying the editor.
		* Essentially, it's an async version of basic React lifecycle methods like `componentDidMount`, `componentWillUnmount`.
		*
		* 	* Result of {@link LifeCycleAsyncOperators#mount} method is passed to {@link LifeCycleAsyncOperators#unmount} as an argument.
		*/
		__publicField(this, "_lifecycle");
		/**
		* This is the element instance that the editor uses for mounting. This element should contain the `ckeditorInstance` member
		* once the editor has been successfully mounted to it. The semaphore ensures that a new instance of the editor, which will
		* be assigned to this element by the {@link #_lifecycle:mount} method, will always be initialized after the successful
		* destruction of the underlying `ckeditorInstance` that was previously mounted on this element.
		*/
		__publicField(this, "_element");
		/**
		* This is the lock mechanism utilized by the {@link #lock} and {@link #release} methods.
		*
		* 	* If the editor is not yet mounted and is awaiting mounting (for instance, when another editor is
		* 	  occupying the element), then it is null.
		*
		* 	* When the editor is mounted on the element, this variable holds an unresolved promise that will be
		* 	  resolved after the editor is destroyed.
		*
		* 	* Once the editor is destroyed (and it was previously mounted), the promise is resolved.
		*/
		__publicField(this, "_releaseLock", null);
		/**
		* This is the result of the {@link #_lifecycle:mount} function. This value should be reset to `null`
		* once the semaphore is released. It is utilized to store certain data that must be removed following
		* the destruction of the editor. This data may include the editor's instance, the assigned watchdog,
		* or handles for additional window listeners.
		*/
		__publicField(this, "_value", null);
		/**
		* This is a list of callbacks that are triggered if the semaphore {@link #_lifecycle:mount} method executes successfully.
		* It is utilized in scenarios where we need to assign certain properties to an editor that is currently in the process of mounting.
		* An instance of such usage could be two-way binding. We aim to prevent the loss of all `setData` calls if the editor has not
		* yet been mounted, therefore these calls will be executed immediately following the completion of the mounting process.
		*/
		__publicField(this, "_afterMountCallbacks", []);
		/**
		* This represents the actual mounting state of the semaphore. It is primarily used by the {@link #release} method to
		* determine whether the initialization of the editor should be skipped or, if the editor is already initialized, the editor
		* should be destroyed.
		*
		* 	* If `destroyedBeforeInitialization` is true, then the {@link #release} method was invoked before the editor began to mount.
		* 	  This often occurs in strict mode when we assign a promise to the {@link LifeCycleEditorElementSemaphore#_semaphores} map
		* 	  and the assigned `mount` callback has not yet been called. In this scenario, it is safe to skip the initialization of the editor
		* 	  and simply release the semaphore.
		*
		*	* If `mountingInProgress` is a Promise, then the {@link #release} method was invoked after the initialization of the editor and
		the editor must be destroyed before the semaphore is released.
		*/
		__publicField(this, "_state", {
			destroyedBeforeInitialization: false,
			mountingInProgress: null
		});
		/**
		* Inverse of {@link #_lock} method that tries to destroy attached editor.
		*
		* 	* If editor is being already attached to element (or is in attaching process) then after fully initialization of editor
		* 	  destroy is performed and semaphore is released. The {@link #_lifecycle} unmount method is called.
		*
		* 	* If editor is being destroyed before initialization then it does nothing but sets `destroyedBeforeInitialization` flag that
		* 	  will be later checked by {@link #_lock} method in initialization. The {@link #_lifecycle} unmount method is not called.
		*
		* *Important note:*
		*
		* It’s really important to keep this method *sync*. If we make this method *async*, it won’t work well because
		* it will cause problems when we’re trying to set up the {@link LifeCycleEditorElementSemaphore#_semaphores} map entries.
		*/
		__publicField(this, "release", once(() => {
			const { _releaseLock, _state, _element, _lifecycle } = this;
			if (_state.mountingInProgress) _state.mountingInProgress.then(() => _lifecycle.unmount({
				element: _element,
				mountResult: this.value
			})).catch((error) => {
				console.error("CKEditor unmounting error:", error);
			}).then(_releaseLock.resolve).then(() => {
				this._value = null;
			});
			else {
				_state.destroyedBeforeInitialization = true;
				_releaseLock.resolve();
			}
		}));
		this._element = element;
		this._lifecycle = lifecycle;
		this._lock();
	}
	/**
	* Getter for {@link #_value}.
	*/
	get value() {
		return this._value;
	}
	/**
	* Resets the semaphore to its initial state.
	*/
	discard() {
		this._value = null;
		this._releaseLock = null;
		this._afterMountCallbacks = [];
		this._state = {
			destroyedBeforeInitialization: false,
			mountingInProgress: null
		};
	}
	/**
	* Occasionally, the Watchdog restarts the editor instance, resulting in a new instance being assigned to the semaphore.
	* In terms of race conditions, it's generally safer to simply override the semaphore value rather than recreating it
	* with a different one.
	*/
	unsafeSetValue(value) {
		this._value = value;
		this._afterMountCallbacks.forEach((callback) => {
			if (this._lifecycle.isValueValid && !this._lifecycle.isValueValid(value)) return;
			callback(value);
		});
		this._afterMountCallbacks = [];
	}
	/**
	* This registers a callback that will be triggered after the editor has been successfully mounted.
	*
	* 	* If the editor is already mounted, the callback will be executed immediately.
	*	* If the editor is in the process of mounting, the callback will be executed upon successful mounting.
	* 	* If the editor is never mounted, the passed callback will not be executed.
	* 	* If an exception is thrown within the callback, it will be re-thrown in the semaphore.
	* 	* If the value is not valid (determined by isValueValid), the callback will not be executed.
	*/
	runAfterMount(callback) {
		const { _value, _afterMountCallbacks } = this;
		if (_value) {
			if (this._lifecycle.isValueValid && !this._lifecycle.isValueValid(_value)) return;
			callback(_value);
		} else _afterMountCallbacks.push(callback);
	}
	/**
	* This method is used to inform other components that the {@link #_element} will be used by the editor,
	* which is initialized by the {@link #_lifecycle} methods.
	*
	* 	* If an editor is already present on the provided element, the initialization of the current one
	* 	  will be postponed until the previous one is destroyed.
	*
	* 	* If the element is empty and does not have an editor attached to it, the currently locked editor will
	* 	  be mounted immediately.
	*
	* After the successful initialization of the editor and the assignment of the {@link #_value} member,
	* the `onReady` lifecycle method is called.
	*
	* *Important note:*
	*
	* It’s really important to keep this method *sync*. If we make this method *async*, it won’t work well because
	* it will cause problems when we’re trying to set up the {@link LifeCycleEditorElementSemaphore#_semaphores} map entries.
	*/
	_lock() {
		const { _semaphores } = _LifeCycleElementSemaphore;
		const { _state, _element, _lifecycle } = this;
		const prevElementSemaphore = _semaphores.get(_element) || Promise.resolve(null);
		const releaseLock = createDefer();
		this._releaseLock = releaseLock;
		const newElementSemaphore = prevElementSemaphore.then(() => {
			if (_state.destroyedBeforeInitialization) return Promise.resolve(void 0);
			_state.mountingInProgress = _lifecycle.mount().then((mountResult) => {
				if (mountResult) this.unsafeSetValue(mountResult);
				return mountResult;
			});
			return _state.mountingInProgress;
		}).then(async (mountResult) => {
			if (mountResult && _lifecycle.afterMount) await _lifecycle.afterMount({
				element: _element,
				mountResult
			});
		}).then(() => releaseLock.promise).catch((error) => {
			console.error("CKEditor mounting error:", error);
		}).then(() => {
			if (_semaphores.get(_element) === newElementSemaphore) _semaphores.delete(_element);
		});
		_semaphores.set(_element, newElementSemaphore);
	}
};
/**
* This is a map of elements associated with promises. It informs the semaphore that the underlying HTML element, used as a key,
* is currently in use by another editor. Each element is assigned a promise, which allows for the easy chaining of new
* editor instances on an element that is already in use by another instance. The process works as follows:
*
* 	1. If an element is being used by an editor, then the initialization of a new editor
* 	   instance is chained using the `.then()` method of the Promise.
*
* 	2. If the editor associated with the underlying element is destroyed, then `Promise.resolve()` is called
* 	   and the previously assigned `.then()` editor callback is executed.
*
*  @see {@link #lock} for more detailed information on the implementation.
*/
__publicField(_LifeCycleElementSemaphore, "_semaphores", /* @__PURE__ */ new Map());
var LifeCycleElementSemaphore = _LifeCycleElementSemaphore;
var ReactContextMetadataKey = "$__CKEditorReactContextMetadata";
function withCKEditorReactContextMetadata(metadata, config) {
	return {
		...config,
		[ReactContextMetadataKey]: metadata
	};
}
var ContextWatchdogContext = React.createContext(null);
var isContextWatchdogValue = (obj) => !!obj && typeof obj === "object" && "status" in obj && [
	"initializing",
	"initialized",
	"error"
].includes(obj.status);
var isContextWatchdogValueWithStatus = (status) => (obj) => isContextWatchdogValue(obj) && obj.status === status;
var isContextWatchdogInitializing = isContextWatchdogValueWithStatus("initializing");
var isContextWatchdogReadyToUse = (obj) => isContextWatchdogValueWithStatus("initialized")(obj) && obj.watchdog.state === "ready";
var ReactIntegrationUsageDataPlugin = createIntegrationUsageDataPlugin("react", {
	version: "11.1.2",
	frameworkVersion: React.version
});
function appendAllIntegrationPluginsToConfig(editorConfig) {
	if (isCKEditorFreeLicense(editorConfig.licenseKey)) return editorConfig;
	return appendExtraPluginsToEditorConfig(editorConfig, [ReactIntegrationUsageDataPlugin]);
}
var EditorWatchdogAdapter = class {
	/**
	* @param contextWatchdog The context watchdog instance that will be wrapped into editor watchdog API.
	*/
	constructor(contextWatchdog) {
		/**
		* The context watchdog instance that will be wrapped into editor watchdog API.
		*/
		__publicField(this, "_contextWatchdog");
		/**
		* A unique id for the adapter to distinguish editor items when using the context watchdog API.
		*/
		__publicField(this, "_id");
		/**
		* A watchdog's editor creator function.
		*/
		__publicField(this, "_creator");
		this._contextWatchdog = contextWatchdog;
		this._id = uid();
	}
	/**
	*  @param creator A watchdog's editor creator function.
	*/
	setCreator(creator) {
		this._creator = creator;
	}
	create(sourceElementOrDataOrConfig, config) {
		let watchdogItemConfiguration = {
			creator: this._creator,
			id: this._id,
			type: "editor"
		};
		if (config) watchdogItemConfiguration = {
			...watchdogItemConfiguration,
			sourceElementOrData: sourceElementOrDataOrConfig,
			config
		};
		else watchdogItemConfiguration = {
			...watchdogItemConfiguration,
			config: sourceElementOrDataOrConfig
		};
		return this._contextWatchdog.add(watchdogItemConfiguration);
	}
	/**
	* Creates a listener that is attached to context watchdog's item and run when the context watchdog fires.
	* Currently works only for the `error` event.
	*/
	on(_, callback) {
		this._contextWatchdog.on("itemError", (_2, { itemId, error }) => {
			if (itemId === this._id) callback(null, {
				error,
				causesRestart: void 0
			});
		});
	}
	destroy() {
		if (this._contextWatchdog.state === "ready") return this._contextWatchdog.remove(this._id);
		return Promise.resolve();
	}
	/**
	* An editor instance.
	*/
	get editor() {
		return this._contextWatchdog.getItem(this._id);
	}
};
var REACT_INTEGRATION_READ_ONLY_LOCK_ID$1 = "Lock from React integration (@ckeditor/ckeditor5-react)";
var CKEditor = class extends React.Component {
	constructor(props) {
		super(props);
		/**
		* After mounting the editor, the variable will contain a reference to the created editor.
		* @see: https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_editor-Editor.html
		*/
		__publicField(this, "domContainer", React.createRef());
		/**
		* Unlocks element in editor semaphore after destroy editor instance.
		*/
		__publicField(this, "editorSemaphore", null);
		assertMinimumSupportedVersion();
	}
	get _semaphoreValue() {
		const { editorSemaphore } = this;
		return editorSemaphore ? editorSemaphore.value : null;
	}
	/**
	* An watchdog instance.
	*/
	get watchdog() {
		const { _semaphoreValue } = this;
		return _semaphoreValue ? _semaphoreValue.watchdog : null;
	}
	/**
	* An editor instance.
	*/
	get editor() {
		const { _semaphoreValue } = this;
		return _semaphoreValue ? _semaphoreValue.instance : null;
	}
	/**
	* The CKEditor component should not be updated by React itself.
	* However, if the component identifier changes, the whole structure should be created once again.
	*/
	shouldComponentUpdate(nextProps) {
		const { props, editorSemaphore } = this;
		if (nextProps.id !== props.id) return true;
		if (nextProps.disableWatchdog !== props.disableWatchdog) return true;
		if (editorSemaphore) {
			editorSemaphore.runAfterMount(({ instance }) => {
				if (shouldUpdateEditorData(props, nextProps, instance)) instance.data.set(nextProps.data);
			});
			if ("disabled" in nextProps) editorSemaphore.runAfterMount(({ instance }) => {
				if (nextProps.disabled) instance.enableReadOnlyMode(REACT_INTEGRATION_READ_ONLY_LOCK_ID$1);
				else instance.disableReadOnlyMode(REACT_INTEGRATION_READ_ONLY_LOCK_ID$1);
			});
		}
		return false;
	}
	/**
	* Initialize the editor when the component is mounted.
	*/
	componentDidMount() {
		if (!isContextWatchdogInitializing(this.context)) this._initLifeCycleSemaphore();
	}
	/**
	* Re-render the entire component once again. The old editor will be destroyed and the new one will be created.
	*/
	componentDidUpdate() {
		if (!isContextWatchdogInitializing(this.context)) this._initLifeCycleSemaphore();
	}
	/**
	* Destroy the editor before unmounting the component.
	*/
	componentWillUnmount() {
		this._unlockLifeCycleSemaphore();
	}
	/**
	* Async destroy attached editor and unlock element semaphore.
	*/
	_unlockLifeCycleSemaphore() {
		if (this.editorSemaphore) {
			this.editorSemaphore.release();
			this.editorSemaphore = null;
		}
	}
	/**
	* Unlocks previous editor semaphore and creates new one..
	*/
	_initLifeCycleSemaphore() {
		this._unlockLifeCycleSemaphore();
		this.editorSemaphore = new LifeCycleElementSemaphore(this.domContainer.current, {
			isValueValid: (value) => value && !!value.instance,
			mount: async () => {
				var _a, _b;
				try {
					return await this._initializeEditor();
				} catch (error) {
					(_b = (_a = this.props).onError) == null || _b.call(_a, error, {
						phase: "initialization",
						willEditorRestart: false
					});
					throw error;
				}
			},
			afterMount: ({ mountResult }) => {
				const { onReady } = this.props;
				if (onReady && this.domContainer.current !== null) onReady(mountResult.instance);
			},
			unmount: async ({ element, mountResult }) => {
				const { onAfterDestroy } = this.props;
				try {
					await this._destroyEditor(mountResult);
					element.innerHTML = "";
				} finally {
					if (onAfterDestroy) onAfterDestroy(mountResult.instance);
				}
			}
		});
	}
	/**
	* Render a <div> element which will be replaced by CKEditor.
	*/
	render() {
		return /* @__PURE__ */ React.createElement("div", { ref: this.domContainer });
	}
	/**
	* Initializes the editor by creating a proper watchdog and initializing it with the editor's configuration.
	*/
	async _initializeEditor() {
		const supports = getInstalledCKBaseFeatures();
		const { editor: Editor, disableWatchdog, watchdogConfig } = this.props;
		const mergedConfig = this._getMergedConfig(true);
		if (disableWatchdog) return {
			instance: await this._createEditor(mergedConfig),
			watchdog: null
		};
		const watchdog = (() => {
			if (isContextWatchdogReadyToUse(this.context)) return new EditorWatchdogAdapter(this.context.watchdog);
			return new Editor.EditorWatchdog(Editor, watchdogConfig);
		})();
		watchdog.on("error", (_, { error, causesRestart }) => {
			var _a;
			((_a = this.props.onError) != null ? _a : console.error)(error, {
				phase: "runtime",
				willEditorRestart: causesRestart
			});
		});
		if (supports.elementConfigAttachment) {
			watchdog.setCreator(async (config) => this._watchdogCreateEditor(watchdog, config));
			await watchdog.create(mergedConfig);
		} else {
			watchdog.setCreator(async (_, config) => this._watchdogCreateEditor(watchdog, config));
			await watchdog.create(this.domContainer.current, mergedConfig);
		}
		return {
			watchdog,
			instance: watchdog.editor
		};
	}
	/**
	* Creates editor in watchdog context.
	*
	* @param watchdog Watchdog adapter.
	* @param config Editor configuration.
	* @returns Editor instance.
	*/
	async _watchdogCreateEditor(watchdog, config) {
		const { editorSemaphore } = this;
		const { onAfterDestroy, onReady } = this.props;
		const nonFirstCreate = !!(editorSemaphore == null ? void 0 : editorSemaphore.value);
		if (nonFirstCreate && onAfterDestroy) onAfterDestroy(editorSemaphore.value.instance);
		const instance = await this._createEditor(config);
		if (nonFirstCreate && editorSemaphore) {
			editorSemaphore.unsafeSetValue({
				instance,
				watchdog
			});
			setTimeout(() => {
				onReady?.(watchdog.editor);
			});
		}
		return instance;
	}
	/**
	* Creates an editor from the element and configuration.
	*
	* @param config CKEditor 5 editor configuration.
	* @returns Editor instance.
	*/
	async _createEditor(config) {
		const { editor: Editor } = this.props;
		const supports = getInstalledCKBaseFeatures();
		const mergedConfig = this._getMergedConfig(false, config);
		const editor = await (supports.elementConfigAttachment ? Editor.create(mergedConfig) : Editor.create(this.domContainer.current, mergedConfig));
		if (this.props.disabled) editor.enableReadOnlyMode(REACT_INTEGRATION_READ_ONLY_LOCK_ID$1);
		const modelDocument = editor.model.document;
		const viewDocument = editor.editing.view.document;
		modelDocument.on("change:data", (event) => {
			var _a, _b;
			(_b = (_a = this.props).onChange) == null || _b.call(_a, event, editor);
		});
		viewDocument.on("focus", (event) => {
			var _a, _b;
			(_b = (_a = this.props).onFocus) == null || _b.call(_a, event, editor);
		});
		viewDocument.on("blur", (event) => {
			var _a, _b;
			(_b = (_a = this.props).onBlur) == null || _b.call(_a, event, editor);
		});
		return editor;
	}
	/**
	* It gets an extended configuration containing the entries required for the integration configuration.
	*
	* @param resetData Assigns `data` prop value to the configuration if true.
	* @param config The configuration of the editor.
	* @returns Shallow copy of config.
	*/
	_getMergedConfig(resetData, config) {
		const { contextItemMetadata, editor: Editor } = this.props;
		const supports = getInstalledCKBaseFeatures();
		let mappedConfig = { ...config != null ? config : this.props.config };
		if (contextItemMetadata) mappedConfig = withCKEditorReactContextMetadata(contextItemMetadata, mappedConfig);
		mappedConfig = appendAllIntegrationPluginsToConfig(mappedConfig);
		if (supports.elementConfigAttachment) mappedConfig = assignElementToEditorConfig(Editor, this.domContainer.current, mappedConfig);
		if (resetData) mappedConfig = assignInitialDataToEditorConfig(mappedConfig, this.props.data || "");
		return mappedConfig;
	}
	/**
	* Destroys the editor by destroying the watchdog.
	*/
	async _destroyEditor(initializeResult) {
		const { watchdog, instance } = initializeResult;
		return new Promise((resolve, reject) => {
			setTimeout(async () => {
				try {
					if (watchdog) {
						await watchdog.destroy();
						return resolve();
					}
					if (instance) {
						await instance.destroy();
						return resolve();
					}
					resolve();
				} catch (e) {
					console.error(e);
					reject(e);
				}
			});
		});
	}
};
__publicField(CKEditor, "contextType", ContextWatchdogContext);
function shouldUpdateEditorData(prevProps, nextProps, editor) {
	if (prevProps.data === nextProps.data) return false;
	if (editor.data.get() === nextProps.data) return false;
	return true;
}
function assertMinimumSupportedVersion() {
	switch (compareInstalledCKBaseVersion("42.0.0")) {
		case null:
			console.warn("Cannot find the \"CKEDITOR_VERSION\" in the \"window\" scope.");
			break;
		case -1:
			console.warn("The <CKEditor> component requires using CKEditor 5 in version 42+ or nightly build.");
			break;
	}
}
function mergeRefs(...refs) {
	return (value) => {
		refs.forEach((ref) => {
			if (typeof ref === "function") ref(value);
			else if (ref != null) ref.current = value;
		});
	};
}
var EditorEditable = memo(forwardRef(({ id, semaphore, rootName }, ref) => {
	const innerRef = useRef(null);
	useEffect(() => {
		let editable;
		let editor;
		semaphore.runAfterMount(({ instance }) => {
			if (!innerRef.current) return;
			editor = instance;
			const { ui, model } = editor;
			const root = model.document.getRoot(rootName);
			if (root && editor.ui.getEditableElement(rootName)) editor.detachEditable(root);
			editable = ui.view.createEditable(rootName, innerRef.current);
			ui.addEditable(editable);
			instance.editing.view.forceRender();
		});
		return () => {
			if (editor && editor.state !== "destroyed" && innerRef.current) {
				const root = editor.model.document.getRoot(rootName);
				if (root) editor.detachEditable(root);
			}
		};
	}, [semaphore.revision]);
	return /* @__PURE__ */ React.createElement("div", {
		key: semaphore.revision,
		id,
		ref: mergeRefs(ref, innerRef)
	});
}));
EditorEditable.displayName = "EditorEditable";
var EditorToolbarWrapper = forwardRef(({ editor }, ref) => {
	const toolbarRef = useRef(null);
	useEffect(() => {
		const toolbarContainer = toolbarRef.current;
		if (!editor || !toolbarContainer) return;
		const element = editor.ui.view.toolbar.element;
		toolbarContainer.appendChild(element);
		return () => {
			if (toolbarContainer.contains(element)) toolbarContainer.removeChild(element);
		};
	}, [editor && editor.id]);
	return /* @__PURE__ */ React.createElement("div", { ref: mergeRefs(toolbarRef, ref) });
});
EditorToolbarWrapper.displayName = "EditorToolbarWrapper";
//#endregion
//#region node_modules/ckeditor5/dist/ckeditor5.js
var ckeditor5_exports = /* @__PURE__ */ __exportAll({});
import * as import__ckeditor_ckeditor5_ui_dist_index_js from "@ckeditor/ckeditor5-ui/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_ui_dist_index_js);
import * as import__ckeditor_ckeditor5_adapter_ckfinder_dist_index_js from "@ckeditor/ckeditor5-adapter-ckfinder/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_adapter_ckfinder_dist_index_js);
import * as import__ckeditor_ckeditor5_alignment_dist_index_js from "@ckeditor/ckeditor5-alignment/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_alignment_dist_index_js);
import * as import__ckeditor_ckeditor5_autoformat_dist_index_js from "@ckeditor/ckeditor5-autoformat/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_autoformat_dist_index_js);
import * as import__ckeditor_ckeditor5_autosave_dist_index_js from "@ckeditor/ckeditor5-autosave/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_autosave_dist_index_js);
import * as import__ckeditor_ckeditor5_basic_styles_dist_index_js from "@ckeditor/ckeditor5-basic-styles/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_basic_styles_dist_index_js);
import * as import__ckeditor_ckeditor5_block_quote_dist_index_js from "@ckeditor/ckeditor5-block-quote/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_block_quote_dist_index_js);
import * as import__ckeditor_ckeditor5_bookmark_dist_index_js from "@ckeditor/ckeditor5-bookmark/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_bookmark_dist_index_js);
import * as import__ckeditor_ckeditor5_ckbox_dist_index_js from "@ckeditor/ckeditor5-ckbox/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_ckbox_dist_index_js);
import * as import__ckeditor_ckeditor5_ckfinder_dist_index_js from "@ckeditor/ckeditor5-ckfinder/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_ckfinder_dist_index_js);
import * as import__ckeditor_ckeditor5_clipboard_dist_index_js from "@ckeditor/ckeditor5-clipboard/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_clipboard_dist_index_js);
import * as import__ckeditor_ckeditor5_cloud_services_dist_index_js from "@ckeditor/ckeditor5-cloud-services/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_cloud_services_dist_index_js);
import * as import__ckeditor_ckeditor5_code_block_dist_index_js from "@ckeditor/ckeditor5-code-block/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_code_block_dist_index_js);
import * as import__ckeditor_ckeditor5_core_dist_index_js from "@ckeditor/ckeditor5-core/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_core_dist_index_js);
import * as import__ckeditor_ckeditor5_easy_image_dist_index_js from "@ckeditor/ckeditor5-easy-image/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_easy_image_dist_index_js);
import * as import__ckeditor_ckeditor5_editor_balloon_dist_index_js from "@ckeditor/ckeditor5-editor-balloon/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_editor_balloon_dist_index_js);
import * as import__ckeditor_ckeditor5_editor_classic_dist_index_js from "@ckeditor/ckeditor5-editor-classic/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_editor_classic_dist_index_js);
import * as import__ckeditor_ckeditor5_editor_decoupled_dist_index_js from "@ckeditor/ckeditor5-editor-decoupled/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_editor_decoupled_dist_index_js);
import * as import__ckeditor_ckeditor5_editor_inline_dist_index_js from "@ckeditor/ckeditor5-editor-inline/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_editor_inline_dist_index_js);
import * as import__ckeditor_ckeditor5_editor_multi_root_dist_index_js from "@ckeditor/ckeditor5-editor-multi-root/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_editor_multi_root_dist_index_js);
import * as import__ckeditor_ckeditor5_emoji_dist_index_js from "@ckeditor/ckeditor5-emoji/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_emoji_dist_index_js);
import * as import__ckeditor_ckeditor5_engine_dist_index_js from "@ckeditor/ckeditor5-engine/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_engine_dist_index_js);
import * as import__ckeditor_ckeditor5_enter_dist_index_js from "@ckeditor/ckeditor5-enter/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_enter_dist_index_js);
import * as import__ckeditor_ckeditor5_essentials_dist_index_js from "@ckeditor/ckeditor5-essentials/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_essentials_dist_index_js);
import * as import__ckeditor_ckeditor5_find_and_replace_dist_index_js from "@ckeditor/ckeditor5-find-and-replace/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_find_and_replace_dist_index_js);
import * as import__ckeditor_ckeditor5_font_dist_index_js from "@ckeditor/ckeditor5-font/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_font_dist_index_js);
import * as import__ckeditor_ckeditor5_fullscreen_dist_index_js from "@ckeditor/ckeditor5-fullscreen/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_fullscreen_dist_index_js);
import * as import__ckeditor_ckeditor5_heading_dist_index_js from "@ckeditor/ckeditor5-heading/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_heading_dist_index_js);
import * as import__ckeditor_ckeditor5_highlight_dist_index_js from "@ckeditor/ckeditor5-highlight/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_highlight_dist_index_js);
import * as import__ckeditor_ckeditor5_horizontal_line_dist_index_js from "@ckeditor/ckeditor5-horizontal-line/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_horizontal_line_dist_index_js);
import * as import__ckeditor_ckeditor5_html_embed_dist_index_js from "@ckeditor/ckeditor5-html-embed/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_html_embed_dist_index_js);
import * as import__ckeditor_ckeditor5_html_support_dist_index_js from "@ckeditor/ckeditor5-html-support/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_html_support_dist_index_js);
import * as import__ckeditor_ckeditor5_icons_dist_index_js from "@ckeditor/ckeditor5-icons/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_icons_dist_index_js);
import * as import__ckeditor_ckeditor5_image_dist_index_js from "@ckeditor/ckeditor5-image/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_image_dist_index_js);
import * as import__ckeditor_ckeditor5_indent_dist_index_js from "@ckeditor/ckeditor5-indent/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_indent_dist_index_js);
import * as import__ckeditor_ckeditor5_language_dist_index_js from "@ckeditor/ckeditor5-language/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_language_dist_index_js);
import * as import__ckeditor_ckeditor5_link_dist_index_js from "@ckeditor/ckeditor5-link/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_link_dist_index_js);
import * as import__ckeditor_ckeditor5_list_dist_index_js from "@ckeditor/ckeditor5-list/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_list_dist_index_js);
import * as import__ckeditor_ckeditor5_markdown_gfm_dist_index_js from "@ckeditor/ckeditor5-markdown-gfm/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_markdown_gfm_dist_index_js);
import * as import__ckeditor_ckeditor5_media_embed_dist_index_js from "@ckeditor/ckeditor5-media-embed/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_media_embed_dist_index_js);
import * as import__ckeditor_ckeditor5_mention_dist_index_js from "@ckeditor/ckeditor5-mention/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_mention_dist_index_js);
import * as import__ckeditor_ckeditor5_minimap_dist_index_js from "@ckeditor/ckeditor5-minimap/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_minimap_dist_index_js);
import * as import__ckeditor_ckeditor5_page_break_dist_index_js from "@ckeditor/ckeditor5-page-break/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_page_break_dist_index_js);
import * as import__ckeditor_ckeditor5_paragraph_dist_index_js from "@ckeditor/ckeditor5-paragraph/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_paragraph_dist_index_js);
import * as import__ckeditor_ckeditor5_paste_from_office_dist_index_js from "@ckeditor/ckeditor5-paste-from-office/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_paste_from_office_dist_index_js);
import * as import__ckeditor_ckeditor5_remove_format_dist_index_js from "@ckeditor/ckeditor5-remove-format/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_remove_format_dist_index_js);
import * as import__ckeditor_ckeditor5_restricted_editing_dist_index_js from "@ckeditor/ckeditor5-restricted-editing/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_restricted_editing_dist_index_js);
import * as import__ckeditor_ckeditor5_select_all_dist_index_js from "@ckeditor/ckeditor5-select-all/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_select_all_dist_index_js);
import * as import__ckeditor_ckeditor5_show_blocks_dist_index_js from "@ckeditor/ckeditor5-show-blocks/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_show_blocks_dist_index_js);
import * as import__ckeditor_ckeditor5_source_editing_dist_index_js from "@ckeditor/ckeditor5-source-editing/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_source_editing_dist_index_js);
import * as import__ckeditor_ckeditor5_special_characters_dist_index_js from "@ckeditor/ckeditor5-special-characters/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_special_characters_dist_index_js);
import * as import__ckeditor_ckeditor5_style_dist_index_js from "@ckeditor/ckeditor5-style/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_style_dist_index_js);
import * as import__ckeditor_ckeditor5_table_dist_index_js from "@ckeditor/ckeditor5-table/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_table_dist_index_js);
import * as import__ckeditor_ckeditor5_typing_dist_index_js from "@ckeditor/ckeditor5-typing/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_typing_dist_index_js);
import * as import__ckeditor_ckeditor5_undo_dist_index_js from "@ckeditor/ckeditor5-undo/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_undo_dist_index_js);
import * as import__ckeditor_ckeditor5_upload_dist_index_js from "@ckeditor/ckeditor5-upload/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_upload_dist_index_js);
import * as import__ckeditor_ckeditor5_utils_dist_index_js from "@ckeditor/ckeditor5-utils/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_utils_dist_index_js);
import * as import__ckeditor_ckeditor5_watchdog_dist_index_js from "@ckeditor/ckeditor5-watchdog/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_watchdog_dist_index_js);
import * as import__ckeditor_ckeditor5_widget_dist_index_js from "@ckeditor/ckeditor5-widget/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_widget_dist_index_js);
import * as import__ckeditor_ckeditor5_word_count_dist_index_js from "@ckeditor/ckeditor5-word-count/dist/index.js";
__reExport(ckeditor5_exports, import__ckeditor_ckeditor5_word_count_dist_index_js);
/**
* @license Copyright (c) 2003-2026, CKSource Holding sp. z o.o. All rights reserved.
* For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
*/
//#endregion
//#region resources/js/Components/Forms/InputEditor.jsx
function InputEditor({ field, label, value, onChange, error }) {
	const [mounted, setMounted] = useState(false);
	const hasError = !!error;
	useRef(null);
	useEffect(() => {
		setMounted(true);
	}, []);
	if (!mounted) return /* @__PURE__ */ jsxs("div", {
		className: `input-style-1 ${hasError ? "has-error" : ""}`,
		children: [/* @__PURE__ */ jsx("label", { children: label }), /* @__PURE__ */ jsx("div", {
			style: {
				minHeight: 200,
				border: "1px solid #e2e8f0",
				borderRadius: 8,
				padding: 12,
				background: "#f8fafc",
				color: "#94a3b8",
				fontSize: 13
			},
			children: "Loading editor..."
		})]
	});
	return /* @__PURE__ */ jsxs("div", {
		className: `input-style-1 ${hasError ? "has-error" : ""}`,
		children: [
			/* @__PURE__ */ jsx("label", { children: label }),
			/* @__PURE__ */ jsx("div", {
				className: "editor-wrapper",
				style: {
					border: `1px solid ${hasError ? "#dc3545" : "#e2e8f0"}`,
					borderRadius: 8,
					overflow: "hidden"
				},
				children: /* @__PURE__ */ jsx(CKEditor, {
					editor: ckeditor5_exports.ClassicEditor,
					data: value || "",
					onChange: (event, editor) => {
						onChange(editor.getData());
					},
					config: {
						licenseKey: "GPL",
						plugins: [
							ckeditor5_exports.Essentials,
							ckeditor5_exports.Bold,
							ckeditor5_exports.Italic,
							ckeditor5_exports.Underline,
							ckeditor5_exports.Strikethrough,
							ckeditor5_exports.Subscript,
							ckeditor5_exports.Superscript,
							ckeditor5_exports.Code,
							ckeditor5_exports.Heading,
							ckeditor5_exports.FontFamily,
							ckeditor5_exports.FontSize,
							ckeditor5_exports.FontColor,
							ckeditor5_exports.FontBackgroundColor,
							ckeditor5_exports.Alignment,
							ckeditor5_exports.List,
							ckeditor5_exports.ListProperties,
							ckeditor5_exports.TodoList,
							ckeditor5_exports.Link,
							ckeditor5_exports.BlockQuote,
							ckeditor5_exports.CodeBlock,
							ckeditor5_exports.HorizontalLine,
							ckeditor5_exports.Table,
							ckeditor5_exports.TableToolbar,
							ckeditor5_exports.TableCellProperties,
							ckeditor5_exports.TableProperties,
							ckeditor5_exports.MediaEmbed,
							ckeditor5_exports.RemoveFormat,
							ckeditor5_exports.SourceEditing,
							ckeditor5_exports.FindAndReplace,
							ckeditor5_exports.Highlight,
							ckeditor5_exports.SpecialCharacters,
							ckeditor5_exports.SpecialCharactersArrows,
							ckeditor5_exports.SpecialCharactersCurrency,
							ckeditor5_exports.SpecialCharactersLatin,
							ckeditor5_exports.SpecialCharactersMathematical,
							ckeditor5_exports.SpecialCharactersText,
							ckeditor5_exports.Indent,
							ckeditor5_exports.IndentBlock,
							ckeditor5_exports.PasteFromOffice,
							ckeditor5_exports.Autoformat,
							ckeditor5_exports.Fullscreen,
							ckeditor5_exports.ShowBlocks,
							ckeditor5_exports.Undo
						],
						toolbar: {
							items: [
								"undo",
								"redo",
								"|",
								"findAndReplace",
								"sourceEditing",
								"|",
								"heading",
								"|",
								"fontFamily",
								"fontSize",
								"fontColor",
								"fontBackgroundColor",
								"|",
								"bold",
								"italic",
								"underline",
								"strikethrough",
								"subscript",
								"superscript",
								"code",
								"|",
								"alignment",
								"|",
								"bulletedList",
								"numberedList",
								"todoList",
								"|",
								"outdent",
								"indent",
								"|",
								"blockQuote",
								"codeBlock",
								"horizontalLine",
								"|",
								"link",
								"mediaEmbed",
								"|",
								"insertTable",
								"|",
								"highlight",
								"|",
								"specialCharacters",
								"|",
								"removeFormat",
								"|",
								"showBlocks",
								"fullscreen"
							],
							shouldNotGroupWhenFull: true
						},
						heading: { options: [
							{
								model: "paragraph",
								title: "Paragraph",
								class: "ck-heading_paragraph"
							},
							{
								model: "heading1",
								view: "h1",
								title: "Heading 1",
								class: "ck-heading_h1"
							},
							{
								model: "heading2",
								view: "h2",
								title: "Heading 2",
								class: "ck-heading_h2"
							},
							{
								model: "heading3",
								view: "h3",
								title: "Heading 3",
								class: "ck-heading_h3"
							},
							{
								model: "heading4",
								view: "h4",
								title: "Heading 4",
								class: "ck-heading_h4"
							},
							{
								model: "heading5",
								view: "h5",
								title: "Heading 5",
								class: "ck-heading_h5"
							},
							{
								model: "heading6",
								view: "h6",
								title: "Heading 6",
								class: "ck-heading_h6"
							}
						] },
						list: { properties: {
							styles: true,
							startIndex: true,
							reversed: true
						} },
						table: { contentToolbar: [
							"tableColumn",
							"tableRow",
							"mergeTableCells",
							"tableCellProperties",
							"tableProperties"
						] },
						link: { addTargetToExternalLinks: true },
						fontFamily: { options: [
							"default",
							"Arial, Helvetica, sans-serif",
							"Courier New, monospace",
							"Georgia, serif",
							"Lucida Sans Unicode, Lucida Grande, sans-serif",
							"Tahoma, Geneva, sans-serif",
							"Times New Roman, serif",
							"Trebuchet MS, Helvetica, sans-serif",
							"Verdana, Geneva, sans-serif"
						] },
						fontSize: { options: [
							9,
							10,
							11,
							12,
							13,
							14,
							16,
							18,
							20,
							22,
							24,
							28,
							32,
							36,
							40,
							48,
							56,
							64
						] }
					}
				})
			}),
			hasError && /* @__PURE__ */ jsx("span", {
				className: "text-danger",
				style: { fontSize: 11 },
				children: error
			})
		]
	});
}
//#endregion
export { InputEditor as t };
