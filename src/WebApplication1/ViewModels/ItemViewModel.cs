﻿using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.ViewModels
{
    [JsonObject(MemberSerialization.OptOut)]
    public class ItemViewModel
    {
        public ItemViewModel() { }

        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Text { get; set; }
        public string Notes { get; set; }
        [DefaultValue(0)]
        public int Type { get; set; }
        [DefaultValue(0)]
        public int Flags { get; set; }
        public string UserId { get; set; }
        [JsonIgnore]
        public int ViewCount { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime LastModifiedDate { get; set; }
    }
}
