<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Roles extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_roles';

    protected $fillable = [
        'vNama', 
        'eDeleted'
    ];

    const CREATED_AT = 'tCreated';
    const UPDATED_AT = 'tUpdated';

    protected static function booted(): void
    {
        static::creating(function ($roles) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
            $roles->iCreatedid = auth()->id();
            $roles->iUpdatedid = auth()->id();
        });

        static::updating(function ($roles) {
            $roles->iUpdatedid = auth()->id();
        });
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
