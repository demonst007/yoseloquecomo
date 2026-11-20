/**
 * Module entry. Runs after the legacy classic scripts (modules are deferred),
 * replaces the claude.ai runtime with our platform layer and adds account UI.
 */
import './ui/auth-gate.css';
import { installClaudeShim } from './platform/index.js';
import { mountAuthGate } from './ui/auth-gate.js';
import { installAccountMenu } from './ui/account-menu.js';

installClaudeShim();
installAccountMenu();
mountAuthGate();
