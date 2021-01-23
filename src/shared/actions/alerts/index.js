import { getId } from './utils';

/** @typedef {object} Alert
 *  @property {number=} id
 *  @property {string} title
 *  @property {string=} time
 *  @property {'success' | 'error'} icon
 *  @property {string} message
 *  @property {number=} duration
 *  @property {boolean=} _show
 *  @property {boolean=} _started
 */

/** @param {Alert} alert */
export const pushAlert = alert => ({
  type: 'pushAlert',
  payload: {
    ...alert,
    id: alert.id || getId(),
    duration: alert.duration || 4000,
    _show: true
  }
});

/** @param {Alert} alert */
export const _popAlert = alert => ({ type: '_popAlert', payload: alert });

/** @param {Alert} alert */
export const _hideAlert = alert => ({ type: '_hideAlert', payload: alert });

export const resetAlerts = () => ({ type: 'resetAlerts', payload: null });
