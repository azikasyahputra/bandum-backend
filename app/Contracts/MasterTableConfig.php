<?php

declare(strict_types=1);

namespace App\Contracts;

use Illuminate\Http\Request;

interface MasterTableConfig
{
    public function modelClass(): string;
    public function tableRoute(): string;
    public function label(): string;
    public function columns(): array;
    public function columnLabel(string $col): string;
    public function fieldType(string $col): string;
    public function selectOptions(): array;
    public function search(): array;
    public function relatedTables(): array;
    public function primaryKey(): string;
    public function useSoftDelete(): bool;
    public function fileColumns(): array;
    public function uploadFile(Request $request, string $column): ?string;
    public function selectData(): array;
    public function enumOptions(string $col): array;
}
