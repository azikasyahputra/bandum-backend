<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BarangKemasan extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_barang_kemasan';

    protected $fillable = [
        'iIdBarang',
        'vNama', 
        'nHarga', 
        'nHargastrike',
        'vSku', 
        'eDeleted', 
    ];

    const CREATED_AT = 'tCreated';
    const UPDATED_AT = 'tUpdated';

    protected static function booted(): void
    {
        static::creating(function ($barangkemasan) {
            $barangkemasan->iCreatedid = auth()->id();
            $barangkemasan->iUpdatedid = auth()->id();
        });

        static::updating(function ($barangkemasan) {
            $barangkemasan->iUpdatedid = auth()->id();
        });
    }

    public function barang(): HasOne
    {
        return $this->hasOne(Barang::class, 'iId', 'iIdBarang');
    }
    
    public function createdBy(): HasOne
    {
        return $this->hasOne(User::class, 'id', 'iCreatedid');
    }

    public function updatedBy(): HasOne
    {
        return $this->hasOne(User::class, 'id', 'iUpdatedid');
    }
}
