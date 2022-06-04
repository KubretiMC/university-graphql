"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditMessageInput = exports.CreateMessageInput = void 0;
const class_validator_1 = require("class-validator");
const type_graphql_1 = require("type-graphql");
const user_params_1 = require("./user-params");
let CreateMessageInput = class CreateMessageInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.MaxLength)(10),
    __metadata("design:type", String)
], CreateMessageInput.prototype, "messageNumber", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateMessageInput.prototype, "createdBy", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateMessageInput.prototype, "message", void 0);
CreateMessageInput = __decorate([
    (0, type_graphql_1.InputType)()
], CreateMessageInput);
exports.CreateMessageInput = CreateMessageInput;
let EditMessageInput = class EditMessageInput {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.MaxLength)(10),
    __metadata("design:type", String)
], EditMessageInput.prototype, "messageNumber", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], EditMessageInput.prototype, "createdBy", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], EditMessageInput.prototype, "message", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => [user_params_1.UserInput]),
    __metadata("design:type", Array)
], EditMessageInput.prototype, "users", void 0);
EditMessageInput = __decorate([
    (0, type_graphql_1.InputType)()
], EditMessageInput);
exports.EditMessageInput = EditMessageInput;
